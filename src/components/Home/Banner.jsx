// src/components/Banner.js
import React from "react";
import useSlider from "@components/Slider/Slider"; // Import the custom hook

const Banner = () => {
    const {
        slideIndex,
        sliderRef,
        settings,
        setSlide,
        goToPrev,
        goToNext,
        Slider,
    } = useSlider();

    const images = [
        {
            src: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
            caption: "Malacca",
        },
        {
            src: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
            caption: "Cameron Highland",
        },
        {
            src: "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
            caption: "New Delhi",
        },
        {
            src: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
            caption: "Ladakh",
        },
        {
            src: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg",
            caption: "Nubra Valley",
        },
    ];

    return (
        <div className="relative h-full max-w-full">
            <div className="relative w-full h-screen overflow-hidden bg-white rounded-lg shadow-lg">
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div className="flex-shrink-0 w-full" key={index}>
                            <article className="relative w-full h-full">
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute text-xl font-bold text-white top-4 left-4">
                                    {image.caption}
                                </div>
                            </article>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Previous and Next Buttons */}
            <button
                onClick={goToPrev}
                className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-black rounded-full shadow-lg top-1/2 left-4 opacity-70 hover:opacity-100"
            >
                <span className="text-xl font-bold">❮</span>
            </button>
            <button
                onClick={goToNext}
                className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-black rounded-full shadow-lg top-1/2 right-4 opacity-70 hover:opacity-100"
            >
                <span className="text-xl font-bold">❯</span>
            </button>

            {/* Dot Controls */}
            <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                {images.map((_, index) => (
                    <label
                        key={index}
                        className={`cursor-pointer w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 transition-all duration-300 ${
                            slideIndex === index ? "bg-gray-700" : ""
                        }`}
                        onClick={() => setSlide(index)}
                    ></label>
                ))}
            </div>
        </div>
    );
};

export default Banner;
