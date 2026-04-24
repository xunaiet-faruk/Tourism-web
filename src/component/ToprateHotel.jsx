import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaMapMarkerAlt, FaUserFriends, FaStar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';

const TopRatedHotels = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const hotelData = [
        { id: 1, image: "/slider1.png", title: "California Sunset/Twilight Boat Cruise", location: "Manchester, England", rating: "4.8 (120 Reviews)",  price: "48.25" },
        { id: 2, image: "/slider2.png", title: "NYC: Food Tastings and Culture Tour", location: "Manchester, England", rating: "4.9 (85 Reviews)", price: "17.32" },
        { id: 3, image: "/slider3.png", title: "Grand Canyon Horseshoe Bend 2 days", location: "Manchester, England", rating: "5.0 (200 Reviews)",  price: "15.63" },
        { id: 4, image: "/slider4.png", title: "London Eye Private Capsule Experience", location: "London, UK", rating: "4.7 (90 Reviews)", price: "120.00" },
        { id: 5, image: "/slider1.png", title: "California Sunset/Twilight Boat Cruise", location: "Manchester, England", rating: "4.8 (120 Reviews)",  price: "48.25" },
        { id: 6, image: "/slider2.png", title: "NYC: Food Tastings and Culture Tour", location: "Manchester, England", rating: "4.9 (85 Reviews)", price: "17.32" },
    ];

    const HotelCard = ({ hotel }) => (
        
        <div className="hover:-translate-y-2 h-[557px] w-[403px] transition duration-300 group cursor-pointer font-['Manrope'] mb-10">
            <div className="relative overflow-hidden">
                <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="h-[326px] w-full rounded-[32px] object-cover group-hover:scale-105 transition duration-500"
                />
              
            </div>

            <div className="bg-white rounded-[24px] h-[243px] w-full p-6 -mt-16 relative z-10 border border-[#E4E6E8] shadow-md flex flex-col justify-between">
                <div>
                    <h2 className="text-[22px] font-extrabold text-gray-900 leading-tight line-clamp-2">
                        {hotel.title}
                    </h2>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-2 text-[#737373] mt-3">
                            <FaMapMarkerAlt className="text-sm" />
                            <span className="text-[14px] md:text-[16px]">{hotel.location}</span>
                        </div>

                        <div className="flex flex-col items-end mt-3">
                            <div className="flex items-center gap-0.5 text-[#FAB326]">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} />
                                ))}
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div>
                        <span className="text-xl font-bold text-gray-900">${hotel.price}</span>
                        <span className="text-gray-500 text-sm"> / person</span>
                    </div>
                    <button className="bg-[#0640C3] hover:bg-blue-700 text-white text-sm px-6 py-2.5 rounded-full font-bold transition-all">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );

    return (
         <section className="w-full py-16 md:py-24 relative overflow-hidden mb-12">
           
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/bg.png')`,
                    backgroundColor: '#009AC533',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="absolute inset-0 "></div>
            
            </div>
            <div className="container mx-auto px-5 lg:px-16 max-w-7xl relative z-10 mb-12">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-left ">
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900">Top Rated Hotels</h1>
                        <p className="text-base md:text-[20px] text-[#737373] mt-2">Quality as judged by customers.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button ref={prevRef} className="bg-white hover:bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full shadow-md active:scale-90 transition-all">
                            <IoArrowBack size={24} />
                        </button>
                        <button ref={nextRef} className="bg-white hover:bg-gray-100 w-14 h-14 flex items-center justify-center rounded-full shadow-md active:scale-90 transition-all">
                            <IoArrowForward size={24} />
                        </button>
                    </div>
                </div>
            </div>

           
            <div className="pl-5 lg:pl-[calc((100vw-1280px)/2+64px)] overflow-visible">
                <Swiper
                    modules={[Navigation]}
                    autoplay={false} 
                    loop={false}
                    spaceBetween={240} 
                    slidesPerView={1.2} 
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2.4 },
                        1024: { slidesPerView: 3.4 }, 
                    }}
                    className="!overflow-visible"
                >
                    {hotelData.map((hotel) => (
                        <SwiperSlide key={hotel.id}>
                            <HotelCard hotel={hotel} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TopRatedHotels;