import React from "react";

const Reviews = () => {
    return (
        <div className="flex justify-between w-full px-32 py-20">
            <div className="w-[397px] h-auto p-6 py-10 border border-gray-200 rounded-lg shadow bg-gray-50">
                {/* Star Rating */}
                <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-xl text-yellow-400">
                            ★
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-bold text-gray-800">
                    Multipurpose 100% Pure Cold Pressed Coconut oil.
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed w-[317px] h-[150px] text-gray-600">
                    This is a high quality product, used to use Maxcare and
                    Cocosoul for cooking, hair, skin and body but this is just a
                    level up. The aroma is heavenly and it adds great flavour to
                    my everyday cooking.
                </p>

                {/* User Info */}
                <h4 className="font-bold text-gray-800">VKV</h4>
                <p className="text-sm text-gray-500">Coconut Oil</p>
            </div>
            <div className="w-[397px] h-auto p-6 py-10 border border-gray-200 rounded-lg shadow bg-gray-50">
                {/* Star Rating */}
                <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-xl text-yellow-400">
                            ★
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-bold text-gray-800">
                    Multipurpose 100% Pure Cold Pressed Coconut oil.
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed w-[317px] h-[150px] text-gray-600">
                    This is a high quality product, used to use Maxcare and
                    Cocosoul for cooking, hair, skin and body but this is just a
                    level up. The aroma is heavenly and it adds great flavour to
                    my everyday cooking.
                </p>

                {/* User Info */}
                <h4 className="font-bold text-gray-800">VKV</h4>
                <p className="text-sm text-gray-500">Coconut Oil</p>
            </div>{" "}
            <div className="w-[397px] h-auto p-6 py-10 border border-gray-200 rounded-lg shadow bg-gray-50">
                {/* Star Rating */}
                <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-xl text-yellow-400">
                            ★
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-bold text-gray-800">
                    Multipurpose 100% Pure Cold Pressed Coconut oil.
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed w-[317px] h-[150px] text-gray-600">
                    This is a high quality product, used to use Maxcare and
                    Cocosoul for cooking, hair, skin and body but this is just a
                    level up. The aroma is heavenly and it adds great flavour to
                    my everyday cooking.
                </p>

                {/* User Info */}
                <h4 className="font-bold text-gray-800">VKV</h4>
                <p className="text-sm text-gray-500">Coconut Oil</p>
            </div>
        </div>
    );
};

export default Reviews;
