import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FaSearch,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import AuthModal from "@components/Auth/AuthModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleAuthModal = () => setIsAuthModalOpen(!isAuthModalOpen);

    const navItems = [
        { id: 1, title: "Shop", link: "/" },
        { id: 2, title: "Our Story", link: "/our-story" },
        { id: 3, title: "Track My Order", link: "/track-order" },
    ];

    useEffect(() => {
        // Show the auth modal after 1 minute (60 seconds)
        const timer = setTimeout(() => {
            setIsAuthModalOpen(true); // Show modal after 1 minute
        }, 5000); // 60000ms = 1 minute

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className="fixed top-0 z-40 flex items-center justify-between w-full h-20 px-4 bg-white shadow-md lg:px-16 text-secondary">
            {/* Logo */}
            <Link to="/">
                <div className="flex items-center">
                    <img
                        src="https://www.tatasimplybetter.com/cdn/shop/files/TSB_Logo_180x.png?v=1707387961"
                        alt="Logo"
                        className="h-10"
                    />
                </div>
            </Link>

            {/* Navigation Links */}
            <ul className="justify-center hidden pl-40 space-x-10 font-semibold md:flex lg:space-x-20">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link to={item.link} className="relative text-primary">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center space-x-4">
                <button className="p-2 text-black transition hover:text-green-800">
                    <FaSearch className="text-lg" />
                </button>

                <div className="relative">
                    <button className="p-2 text-black transition hover:text-green-800">
                        <FaShoppingCart className="text-lg" />
                    </button>
                    <span className="absolute top-0 right-0 px-2 text-xs font-bold text-black bg-yellow-400 rounded-full">
                        1
                    </span>
                </div>

                <button
                    onClick={toggleAuthModal}
                    className="flex items-center px-4 py-2 space-x-2 text-black transition border border-black rounded-full hover:bg-gray-200"
                >
                    <FaUser className="text-lg" />
                    <span>Login/Register</span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isOpen ? (
                        <FaTimes className="w-6 h-6" />
                    ) : (
                        <FaBars className="w-6 h-6" />
                    )}
                </button>
                {isOpen && (
                    <div className="absolute left-0 w-full p-4 bg-white shadow-md top-20">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.link}
                                        onClick={toggleMenu}
                                        className="block text-black hover:text-primary"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Auth Modal */}
            {isAuthModalOpen && <AuthModal onClose={toggleAuthModal} />}
        </nav>
    );
};

export default Navbar;
