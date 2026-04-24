import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import { FaArrowRight } from "react-icons/fa";

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('./PopularDestinations.json')
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])

    return (
        <div className='py-12 sm:py-16 md:py-20 lg:py-[146px] font-[Manrope] container mx-auto px-4 sm:px-6 md:px-8'>

            <div className='pb-8 sm:pb-10 md:pb-12 text-center sm:text-left'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl  lg:text-[52px] font-extrabold text-gray-900'>
                    Popular Destinations
                </h1>
                <p className='text-base sm:text-lg md:text-[20px] text-[#737373] mt-2'>
                    Favorite destinations based on customer reviews
                </p>
            </div>

         
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-5 md:gap-6'>

     
                {popular.map((item) => (
                    <PopularCard key={item.id} item={item} />
                ))}

                <div className='bg-[#0640C3] rounded-[28px]  p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform flex flex-col justify-between h-[305px] group cursor-pointer'>

                    <div className="">
                        <h2 className="text-white font-extrabold text-[24px]  ">
                            Crafting Your
                            <br />
                            Perfect Travel
                            <br />
                            Experience
                        </h2>
                    </div>

                    <div className="w-full h-[68px]">
                        <div className="flex justify-between items-center gap-2 sm:gap-3 bg-[#FAB326] transition-all duration-300 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 ">
                            <span className="text-white  font-semibold text-[16px] ">
                                Browse<br/> All destinations
                            </span>
                            <div className='bg-white w-[27px] h-[27px] flex justify-center items-center rounded-full'>
                                <FaArrowRight className="  text-sm sm:text-base group-hover:translate-x-1 transition-transform" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;