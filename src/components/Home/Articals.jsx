const articles = [
    {
        title: "Sunflower Oil and Mustard Oil: Which One Wins in Your Kitchen?",
        date: "December 09, 2024",
        description: "When it comes to choosing the perfect cooking oil...",
    },
    {
        title: "Best Sunflower Oil: Tips on how to choose the perfect cooking partner",
        date: "December 09, 2024",
        description:
            "Here is why selecting the best sunflower oil for your kitchen...",
    },
    {
        title: "Cold Pressed Sunflower Oil: Is It the Best Choice for You?",
        date: "December 06, 2024",
        description:
            "At Tata Simply Better, we take pride in bringing you 100% pure...",
    },
    {
        title: "Tata Simply Better Unveils Sunflower Oil: A Game-Changer for Your Kitchen",
        date: "December 06, 2024",
        description:
            "Take the first step toward a healthier, happier lifestyle...",
    },
];

const ArticleGrid = () => (
    <section className="flex flex-wrap justify-between w-full px-20">
        {articles.map((article, idx) => (
            <div className="w-[310px] overflow-hidden border border-gray-200 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="relative flex items-center justify-center h-48 bg-yellow-400">
                    <h2 className="px-4 text-lg font-bold text-center text-white">
                        SUNFLOWER OIL AND MUSTARD OIL: WHICH ONE WINS IN YOUR
                        KITCHEN?
                    </h2>
                    {/* Optional yellow accents can be designed via SVG or additional Tailwind classes */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500 rounded-full opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-500 rounded-full opacity-60"></div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                    <h3 className="mb-2 text-base font-bold text-gray-800">
                        Sunflower Oil and Mustard Oil: Which One Wins in Your
                        Kitchen?
                    </h3>
                    <p className="mb-3 text-xs text-gray-600">
                        By TATA Simply Better
                        <span className="pl-1 font-medium ">
                            {" "}
                            • December 09, 2024
                        </span>{" "}
                    </p>
                    <p className="text-xs font-medium leading-relaxed text-gray-700">
                        When it comes to choosing the perfect cooking oil, the
                        decision often comes down to two popular options:
                        Sunflower Oil and Mustard Oil.
                    </p>
                </div>
            </div>
        ))}
    </section>
);

export default ArticleGrid;
