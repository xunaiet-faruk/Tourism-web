import React from "react";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const FeaturesTour = () => {
   
    const tours = [
        {
            id: 1,
            title: "California Sunset/Twilight Boat Cruise",
            location: "Manchester, England",
            duration: "2 days 3 nights",
            guests: "4-6 guest",
            price: 48.25,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            rating: "Top Rated"
        },
        {
            id: 2,
            title: "Paris Romantic Evening Tour",
            location: "Paris, France",
            duration: "3 days 2 nights",
            guests: "2-4 guest",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            rating: "Top Rated"
        },
        {
            id: 3,
            title: "Bali Adventure Package",
            location: "Bali, Indonesia",
            duration: "5 days 4 nights",
            guests: "6-8 guest",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
            rating: "Best Seller"
        }
    ];

    return (
        <div className="py-[80px] md:py-[120px] font-[Manrope] container mx-auto px-4 sm:px-6 md:px-8">

            <div className="pb-8 md:pb-12 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900">
                    Our Featured Tours
                </h1>
                <p className="text-base sm:text-lg md:text-[20px] text-[#737373] mt-2">
                    Favorite destinations based on customer reviews
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

                {tours.map((tour) => (
                    <div key={tour.id}
                        className="p-2 sm:p-3 hover:-translate-y-2 transition duration-300 group cursor-pointer">

                        <div className="relative overflow-hidden">
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="h-[250px] sm:h-[280px] md:h-[300px] lg:h-[326px] 
                                         w-full rounded-[28px] sm:rounded-[32px] object-cover 
                                         group-hover:scale-105 transition duration-500"
                            />

                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white 
                                          justify-center items-center flex 
                                          h-[28px] sm:h-[32px] w-[90px] sm:w-[111px] 
                                          text-[#FAB326] text-[12px] sm:text-[14px] 
                                          px-2 sm:px-3 py-1 rounded-full font-bold">
                                {tour.rating}
                            </div>
                        </div>

                        <div className="bg-white rounded-[20px] sm:rounded-[24px] 
                                      h-[auto] min-h-[220px] sm:min-h-[240px] lg:h-[243px] 
                                      w-full p-4 sm:p-5 md:p-6 
                                      -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 
                                      relative z-10 border border-[#E4E6E8]">

                       
                            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 
                                         font-extrabold text-gray-900 leading-snug line-clamp-2">
                                {tour.title}
                            </h2>

                      
                            <div className="flex items-center gap-2 text-[#737373] text-sm mt-2">
                                <FaMapMarkerAlt className="text-[#737373] text-sm sm:text-base" />
                                <span className="text-[13px] sm:text-[14px] md:text-[16px]">
                                    {tour.location}
                                </span>
                            </div>

                       
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500 text-sm mt-3">
                                <div className="flex items-center gap-1">
                                    <MdAccessTime className="text-sm sm:text-base" />
                                    <span className="text-[12px] sm:text-[13px] md:text-[14px]">
                                        {tour.duration}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaUserFriends className="text-sm sm:text-base" />
                                    <span className="text-[12px] sm:text-[13px] md:text-[14px]">
                                        {tour.guests}
                                    </span>
                                </div>
                            </div>

                           
                            <div className="flex items-center justify-between mt-4 sm:mt-5">
                                <div>
                                    <span className="text-lg sm:text-xl font-bold text-gray-900">
                                        ${tour.price}
                                    </span>
                                    <span className="text-gray-500 text-[11px] sm:text-sm"> / person</span>
                                </div>

                                <button className="bg-[#0640C3] hover:bg-blue-700 
                                                 text-white text-[11px] sm:text-sm 
                                                 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 
                                                 rounded-full shadow-sm transition-all 
                                                 hover:scale-105 active:scale-95">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesTour;