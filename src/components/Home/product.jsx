import React from "react";
import ProductCard from "@components/ui/Product/Card";
import useSlider from "@components/Slider/Slider";

const products = [
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L  PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/02_44abc624-af7f-4b9e-bc6a-eb11bcf1e641_2048x2048.jpg?v=1723024614",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/Mustard_02_2048x2048.jpg?v=1723024647",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/02_2048x2048.jpg?v=1723024667",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/001_2_2048x2048.png?v=1723024667",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/02_44abc624-af7f-4b9e-bc6a-eb11bcf1e641_2048x2048.jpg?v=1723024614",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/01_1_2048x2048.png?v=1723024614",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/02_44abc624-af7f-4b9e-bc6a-eb11bcf1e641_2048x2048.jpg?v=1723024614",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC05518_2048x2048.jpg?v=1725440991",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC05518_2048x2048.jpg?v=1725440991",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC05518_2048x2048.jpg?v=1725440991",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC05518_2048x2048.jpg?v=1725440991",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC05518_2048x2048.jpg?v=1725440991",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },
    {
        name: "TATA SIMPLY BETTER GROUND NUT OIL 1L 100% PURE and UNREFINED COLD PRESSED OIL",
        image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC05518_2048x2048.jpg?v=1725440991",
        price: 552,
        originalPrice: 649,
        discount: 14,
        rating: 4.9,
    },

    // Add more products...
];

const ProductCarousel = () => {
    const {
        slideIndex,
        sliderRef,
        productsettings,
        goToPrev,
        goToNext,
        Slider,
    } = useSlider();

    console.log(slideIndex);
    // Ensure this logic runs after slider initialization
    const totalProducts = products.length;
    const isFirstSlide = slideIndex === 0;
    const isLastSlide = slideIndex === totalProducts - 4;

    return (
        <div className="relative w-full h-auto overflow-hidden bg-white rounded-lg px-14 ">
            <div className="relative gap-4 py-4 ">
                <Slider {...productsettings} ref={sliderRef}>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </Slider>
            </div>

            {/* Previous and Next Buttons */}
            {/* Hide Previous Button if on first slide */}
            {!isFirstSlide && (
                <button
                    onClick={goToPrev}
                    className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-black rounded-full shadow-lg top-1/2 left-4 opacity-70 hover:opacity-100"
                >
                    <span className="text-xl font-bold">❮</span>
                </button>
            )}
            {/* Hide Next Button if on last slide */}
            {!isLastSlide && (
                <button
                    onClick={goToNext}
                    className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-black rounded-full shadow-lg top-1/2 right-4 opacity-70 hover:opacity-100"
                >
                    <span className="text-xl font-bold">❯</span>
                </button>
            )}
        </div>
    );
};

export default ProductCarousel;
