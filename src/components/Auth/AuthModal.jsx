import React, { useState, useEffect } from "react";

const AuthModal = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("google");
    const [isRegistration, setIsRegistration] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
        return () => setIsVisible(false);
    }, []);

    const handleGoogleSignIn = () => {
        console.log("Google Sign-In");
    };

    const handleEmailSignIn = (e) => {
        e.preventDefault();
        console.log("Email Sign-In", email, password);
    };

    const handleOtpRequest = (e) => {
        e.preventDefault();
        console.log("OTP requested for:", email);
        setOtp("sent");
    };

    const handleOtpVerify = (e) => {
        e.preventDefault();
        console.log("OTP verification:", otp);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log("Registering user", { name, email, password, mobile });
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-black w-full bg-opacity-50 flex items-center justify-center p-4  duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`relative bg-white rounded-lg shadow-xl max-w-md w-full -top-48 transition-transform duration-500 transform perspective-container ${
                    isVisible ? "scale-100" : "scale-95"
                } ${isRegistration ? "flip-container" : ""}`}
            >
                {/* Login Panel */}
                <div className="bg-white login-panel">
                    {!isRegistration && (
                        <div className="p-6 bg-white flip-content">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="pl-12 mx-auto text-2xl font-bold text-center text-yellow-400">
                                    Welcome! 🎉
                                </h2>
                                <button
                                    onClick={() => {
                                        setIsVisible(false);
                                        setTimeout(onClose, 300);
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="mb-6 font-bold text-center text-black">
                                Sign up for exciting offers!
                            </p>
                            <div className="flex mb-6 border-b">
                                {"google email otp".split(" ").map((tab) => (
                                    <button
                                        key={tab}
                                        className={`flex-1 py-2 px-4 font-bold text-center ${
                                            activeTab === tab
                                                ? "border-b-2 border-[rgb(17,49,8)] text-[rgb(17,49,8)]"
                                                : "text-gray-500"
                                        }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() +
                                            tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                            {activeTab === "google" && (
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-full px-4 py-2 font-bold text-white bg-[rgb(17,49,8)] rounded hover:bg-opacity-90"
                                >
                                    Sign in with Google
                                </button>
                            )}
                            {activeTab === "email" && (
                                <form
                                    onSubmit={handleEmailSignIn}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                            className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 font-bold text-white bg-[rgb(17,49,8)] rounded hover:bg-opacity-90"
                                    >
                                        Sign In
                                    </button>
                                </form>
                            )}
                            {activeTab === "otp" && (
                                <form
                                    onSubmit={
                                        otp ? handleOtpVerify : handleOtpRequest
                                    }
                                    className="space-y-4"
                                >
                                    <div>
                                        <label
                                            htmlFor="email-otp"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email-otp"
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                        />
                                    </div>
                                    {otp && (
                                        <div>
                                            <label
                                                htmlFor="otp"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                OTP
                                            </label>
                                            <input
                                                id="otp"
                                                type="text"
                                                value={otp}
                                                onChange={(e) =>
                                                    setOtp(e.target.value)
                                                }
                                                required
                                                className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                            />
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 font-bold text-white bg-[rgb(17,49,8)] rounded hover:bg-opacity-90"
                                    >
                                        {otp ? "Verify OTP" : "Get OTP"}
                                    </button>
                                </form>
                            )}
                            <p className="mt-4 font-semibold text-center text-gray-600">
                                Don’t have an account?{" "}
                                <button
                                    onClick={() => setIsRegistration(true)}
                                    className="text-[rgb(17,49,8)] hover:underline"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    )}
                </div>
                {/* Registration Panel */}
                <div className="bg-white registration-panel">
                    {isRegistration && (
                        <div className="p-6 bg-white flip-content">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl text-[rgb(17,49,8)] font-bold">
                                    Create Account
                                </h2>
                                <button
                                    onClick={() => {
                                        setIsVisible(false);
                                        setTimeout(onClose, 300);
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <form
                                className="flex flex-col gap-3"
                                onSubmit={handleRegistration}
                            >
                                <div className="">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                        className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="mobile"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Mobile Number
                                    </label>
                                    <input
                                        id="mobile"
                                        type="text"
                                        value={mobile}
                                        onChange={(e) =>
                                            setMobile(e.target.value)
                                        }
                                        required
                                        className="block w-full px-4 py-2 mt-1 text-black border-2 border-black shadow-sm rounded-xl focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 font-bold text-white bg-[rgb(17,49,8)] rounded hover:bg-opacity-90"
                                >
                                    Create Account
                                </button>
                            </form>
                            <p className="mt-4 font-semibold text-center text-gray-600">
                                Already have an account?{" "}
                                <button
                                    onClick={() => setIsRegistration(false)}
                                    className="text-[rgb(17,49,8)] hover:underline"
                                >
                                    Sign In
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
