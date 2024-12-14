import { useState, useRef, useEffect } from "react";
import Slider from "react-slick"; // Importing react-slick directly

// Custom hook to manage the slider's state and methods
const useSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setSlideIndex(index), // This will set the slide index after every change
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
    };

    // Play the slider on mount
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    // Methods to control the slider
    const setSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index); // This will jump to the specified index
        }
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Move to the previous slide
            console.log(sliderRef.current); // Move to the previous slide
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Move to the next slide
            console.log(sliderRef.current.slickNext()); // Move to the previous slide
        }
    };

    // Slick slider settings
    const productsettings = {
        infinite: false, // Keep infinite true for infinite scrolling behavior
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 3000,
        afterChange: (index) => {
            console.log(index, "index");
            setSlideIndex(index);
        }, // This will set the slide index after every change

        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const Bestsellersettings = {
        infinite: true, // Keep infinite true for infinite scrolling behavior
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 3000,
        afterChange: (index) => {
            console.log(index, "index");
            setSlideIndex(index);
        }, // This will set the slide index after every change

        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return {
        slideIndex,
        sliderRef,
        settings,
        setSlide,
        goToPrev,
        goToNext,
        productsettings,
        Bestsellersettings,
        Slider, // Export the Slider here if you need it globally
    };
};

export default useSlider;
