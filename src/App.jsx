// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "@components/ui/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

import RoutesConfig from "./routes/Routes"; // Import the RoutesConfig component

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [location]); // Trigger whenever the route changes

    return null;
}

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Navbar />

                <div
                    className={`fixed bottom-4 right-4 z-40 transition-opacity duration-300 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <button
                        onClick={scrollToTop}
                        className="p-3 text-primary bg-primary rounded-full shadow-lg bg-he bg-headingcolor focus:outline-none transition-transform duration-300 transform hover:translate-y-[-5px]"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="text-white transition-transform duration-300" />
                    </button>
                </div>
                <div className="mt-20">
                    <RoutesConfig />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
