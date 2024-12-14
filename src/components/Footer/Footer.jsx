import React from "react";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const socialIcons = [
        { icon: <FaFacebookF size={20} />, key: "facebook" },
        { icon: <FaLinkedin size={20} />, key: "linkedin" },
        { icon: <FaTwitter size={20} />, key: "twitter" },
        { icon: <FaInstagram size={20} />, key: "instagram" },
    ];

    const learnLinks = [
        { text: "About Us", link: "/about" },
        { text: "FAQs", link: "/faqs" },
        { text: "Bulk Order", link: "/bulk-order" },
        { text: "Contact Us", link: "/contact" },
        { text: "Blogs", link: "/blogs" },
        { text: "Sitemap", link: "/sitemap" },
    ];

    const shopLinks = [
        { text: "Cold Pressed Coconut Oil", link: "/shop/coconut-oil" },
        { text: "Cold Pressed Sesame Oil", link: "/shop/sesame-oil" },
        { text: "Cold Pressed Groundnut Oil", link: "/shop/groundnut-oil" },
        { text: "Cold Pressed Mustard Oil", link: "/shop/mustard-oil" },
        { text: "Tata Plant Based Seekh Kebab", link: "/shop/seekh-kebab" },
        { text: "Tata Plant Based Nuggets", link: "/shop/nuggets" },
        { text: "Tata Plant Based Burger Patty", link: "/shop/burger-patty" },
        { text: "Tata Plant Based Spicy Fingers", link: "/shop/spicy-fingers" },
    ];

    const legalLinks = [
        { text: "Terms of Service", link: "/terms" },
        { text: "Privacy Policy", link: "/privacy" },
        { text: "Shipping Policy", link: "/shipping" },
        { text: "Returns & Refund", link: "/returns" },
    ];

    return (
        <footer className="py-10 text-white bg-black">
            <div className="container px-6 mx-auto lg:px-20">
                <div className="flex flex-col justify-between gap-10 lg:flex-row">
                    {/* Logo and Social Media */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div
                            className="flex items-center justify-center w-48 h-48 bg-center bg-cover"
                            // style={{
                            //     backgroundImage: `url(${footerLogoBack})`,
                            // }}
                        >
                            {/* <img src={footerLogo} alt="Tata Simply Better" /> */}
                        </div>
                        <div className="flex mt-4 space-x-4">
                            {socialIcons.map(({ icon, key }) => (
                                <div
                                    key={key}
                                    className="p-2 text-black bg-white rounded-full cursor-pointer hover:bg-gray-200"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Learn Section */}
                    <div>
                        <h3 className="mb-4 font-bold">Learn</h3>
                        <ul className="space-y-2 text-gray-400">
                            {learnLinks.map(({ text, link }, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link}
                                        className="hover:text-white"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Shop Section */}
                    <div>
                        <h3 className="mb-4 font-bold">Shop</h3>
                        <ul className="space-y-2 text-gray-400">
                            {shopLinks.map(({ text, link }, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link}
                                        className="hover:text-white"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Info */}
                    <div>
                        <h3 className="mb-4 font-bold">Legal Info</h3>
                        <ul className="space-y-2 text-gray-400">
                            {legalLinks.map(({ text, link }, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link}
                                        className="hover:text-white"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="mb-4 font-bold">Newsletter</h3>
                        <p className="mb-4 text-gray-400">
                            Stay up to date with the new collections, products
                            and exclusive offers.
                        </p>
                        <div className="flex overflow-hidden border rounded-lg">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 text-black focus:outline-none"
                            />
                            <button className="px-4 text-black bg-white hover:bg-gray-200">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-sm text-center text-gray-400">
                    &copy; 2024, Tata Simply Better. Powered by Tata | Tech & DX
                    Partner: Neuronimbus
                </div>
            </div>
        </footer>
    );
};

export default Footer;
