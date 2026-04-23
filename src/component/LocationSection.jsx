import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaBusinessTime, FaLocationDot } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';

const LocationSection = () => {
    return (
        <div className="relative  flex items-center justify-center  -top-[120px]">

            <div className="bg-white shadow-2xl w-[1224px] h-[230px] rounded-2xl px-6 py-6 flex flex-col gap-6 relative z-10">

                {/* Top Section */}
                <div className='flex justify-between items-center'>


                    <div className="flex gap-3">

                        <button className="flex items-center justify-center gap-2 
                               w-[107px] h-[40px] 
                               rounded-[50px] 
                               bg-gray-100 hover:bg-gray-200 
                               transition">
                            <img className="w-[18px] h-[18px]" src="/Vector.png" alt="" />
                            <span className="text-[14px] font-medium">Tours</span>
                        </button>

                        <button className="flex items-center justify-center gap-2 
                               w-[107px] h-[40px] 
                               rounded-[50px] 
                               bg-[#FAB326] 
                               text-white 
                               transition">
                            <img className="w-[18px] h-[18px]" src="/Group.png" alt="" />
                            <span className="text-[14px] font-medium">Hotels</span>
                        </button>

                    </div>


                    <p className="font-medium text-[14px] leading-[22px] text-[#737373]">
                        Need Some Help?
                    </p>
                </div>

                <div className='border border-[#E4E6E8] p-5 rounded-2xl h-[104px] flex justify-between items-center gap-6'>

                    {/* LOCATION */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] leading-[22px] font-bold font-[Manrope] text-[#737373] pl-1">
                            Location
                        </p>

                        <div className="flex items-center gap-1">
                            <FaLocationDot className="text-gray-400" />

                            <select className="px-1 text-[14px] text-black font-bold font-[Manrope] bg-transparent outline-none cursor-pointer">
                                <option value="">Select city</option>
                                <option value="ny">New York, USA</option>
                                <option value="london">London, UK</option>
                                <option value="paris">Paris, France</option>
                                <option value="dubai">Dubai, UAE</option>
                                <option value="tokyo">Tokyo, Japan</option>
                                <option value="dhaka">Dhaka, Bangladesh</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-px h-[50px] bg-[#E4E6E8]"></div>

                    {/* CHECK IN / OUT */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] leading-[22px] font-bold font-[Manrope] text-[#737373] pl-1">
                            Check In & Check Out
                        </p>

                        <div className="flex items-center gap-1">
                            <FaBusinessTime className="text-gray-400" />

                            <select className="px-1 text-[14px] text-black font-bold font-[Manrope] bg-transparent outline-none cursor-pointer">
                                <option value="">Select dates</option>
                                <option value="today">Today</option>
                                <option value="tomorrow">Tomorrow</option>
                                <option value="this-week">This Week</option>
                                <option value="weekend">Weekend Trip</option>
                                <option value="month">This Month</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-px h-[50px] bg-[#E4E6E8]"></div>

                    {/* GUEST */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] leading-[22px] font-bold font-[Manrope] text-[#737373] pl-1">
                            Guest
                        </p>

                        <div className="flex items-center gap-1">
                            <IoMdPerson className="text-gray-400" />

                            <select className="px-1 text-[14px] text-black font-bold font-[Manrope] bg-transparent outline-none cursor-pointer">
                                <option value="">Select guests</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5+ Guests</option>
                            </select>
                        </div>
                    </div>

                    {/* SEARCH BUTTON */}
                    <button
                        className="flex items-center justify-center gap-2 
                   w-[151px] h-[58px] 
                   bg-[#0640C3] 
                   rounded-[50px] 
                   text-white 
                   cursor-pointer 
                   transition hover:bg-blue-700"
                    >
                        <CiSearch className="w-[18px] h-[18px] text-white" />
                        <span className="text-[16px] leading-[26px] font-bold font-[Manrope]">
                            Search
                        </span>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default LocationSection;