import React from "react";

const BestsellerCard = ({ product }) => {
    return (
        <div className="  flex  items-center  rounded-lg w-auto h-[290px] ">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-[186px] h-[242px] rounded-lg"
                />
                {product.discount && (
                    <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded top-2 left-2">
                        Save {product.discount}%
                    </span>
                )}
            </div>
            <div className="flex flex-col h-[70%] w-[472px]  mx-10 mt-4 justify-evenly">
                <h3 className="w-full text-sm font-semibold leading-6">
                    {product.name}
                </h3>
                <div className="flex items-center gap-2 my-2">
                    <span className="text-sm font-semibold text-black">
                        ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                    </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-black">
                    <span>★</span>
                    <span className="">{product.rating}</span>
                </div>
                <button className="w-full py-2 mt-4 text-white bg-[#113108] rounded-2xl">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BestsellerCard;
