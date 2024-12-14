import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context for authentication
const AuthContext = createContext();

// Hook to use the AuthContext in other components
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to provide context to children
export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Function to refresh the access token
    async function refreshAccessToken() {
        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/refresh-token",
                {
                    method: "get",
                    credentials: "include", // Include cookies for secure contexts
                }
            );

            if (!response.ok) {
                throw new Error("Failed to refresh access token");
            }

            const data = await response.json();
            setAccessToken(data.accessToken); // Store new access token in memory
            return data.accessToken;
        } catch (error) {
            console.error("Error refreshing token:", error);
            setAccessToken(null); // Logout user if refresh fails
            throw error;
        }
    }

    // Login function to set the access token and navigate to home
    const login = (token) => {
        console.log(token);
        setAccessToken(token);
    };

    // Logout function to clear the access token
    const logout = () => {
        setAccessToken(null); // Clear token on logout
        navigate("/login"); // Navigate to login page after logout (optional)
    };

    // Check the token status on initial load or refresh
    useEffect(() => {
        async function checkToken() {
            if (accessToken) {
                setIsLoading(false); // Stop loading if token is available
                return;
            }
            try {
                await refreshAccessToken();
            } catch (error) {
                setIsLoading(false); // Stop loading if refreshing fails
            }
        }

        checkToken();
    }, [accessToken]);

    return (
        <AuthContext.Provider
            value={{ accessToken, login, logout, refreshAccessToken }}
        >
            {!isLoading && children}{" "}
            {/* Render children only after loading state is done */}
        </AuthContext.Provider>
    );
};
