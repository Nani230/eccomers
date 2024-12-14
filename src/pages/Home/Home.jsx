import React from "react";
import Banner from "@components/Home/Banner";
import ProductCarousel from "@components/Home/product";
import FeatureSection from "@components/Home/Features";
import ArticleGrid from "@components/Home/Articals";
import Bestseller from "@components/Home/Bestseller";
import Reviews from "@components/Home/Reviews";
const Home = () => {
    return (
        <>
            <Banner />
            <FeatureSection />
            <ProductCarousel />
            <Bestseller />
            <ArticleGrid />
            <Reviews />
        </>
    );
};

export default Home;
