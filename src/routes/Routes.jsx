import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "@utils/Loading/Loading"; // Import the custom spinner

// Lazy load the components
const Home = lazy(() => import("@pages/Home/Home"));

const RoutesConfig = () => (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Suspense>
);

export default RoutesConfig;
