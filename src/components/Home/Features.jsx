import React from "react";

const features = [
    { title: "Quality Ingredients", icon: "/path-to-icon1.png" },
    { title: "Better Nutrition Everyday", icon: "/path-to-icon2.png" },
    { title: "Preservative Free Foods", icon: "/path-to-icon3.png" },
    { title: "Responsible Practices", icon: "/path-to-icon4.png" },
];

const FeatureSection = () => {
    return (
        <div className="flex justify-center gap-8 my-8">
            {features.map((feature, index) => (
                <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-2 bg-green-200 rounded-full">
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-8 h-8"
                        />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default FeatureSection;
