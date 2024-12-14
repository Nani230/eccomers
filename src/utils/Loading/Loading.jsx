import React from "react";
import "./Loading.css"; // Ensure you create the CSS file or move the CSS into your global styles

// Custom spinner component
const LoadingSpinner = () => (
    <div className="relative flex items-center justify-center min-h-screen -top-24">
        <span className="loader"></span>
    </div>
);

export default LoadingSpinner;
