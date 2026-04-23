import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PopularCard = ({ item }) => {
    const { name, image, hours } = item;

    return (
        <div className="border border-[#E4E6E8] font-[Manrope]  rounded-[28px] p-4 hover:shadow-lg transition duration-300">

            {/* Image */}
            <div className="rounded-[22px] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[305px] object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-4 flex items-end justify-between">

                <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                        {name}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        {hours} Tours
                    </p>
                </div>

                {/* Arrow Button */}
                <div className="bg-gray-200 hover:bg-gray-300 transition p-3 rounded-full cursor-pointer">
                    <FaArrowRight className="text-gray-700 text-sm" />
                </div>

            </div>
        </div>
    );
};

export default PopularCard;