import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaBusinessTime, FaLocationDot } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';

const LocationSection = () => {
    return (
        <div className="relative flex items-center justify-center -top-[60px] lg:-top-[120px]">
            <div className="bg-white shadow-2xl w-full max-w-[1224px] h-auto rounded-2xl px-4 py-6 lg:px-6 lg:py-6 flex flex-col gap-6 relative z-10">

                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                    <div className="flex gap-3">
                        <button className="flex items-center justify-center gap-2 w-[107px] h-[40px] rounded-[50px] bg-gray-100 hover:bg-gray-200 transition">
                            <img className="w-[18px] h-[18px]" src="/Vector.png" alt="" />
                            <span className="text-[14px] font-medium">Tours</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 w-[107px] h-[40px] rounded-[50px] bg-[#FAB326] text-white transition">
                            <img className="w-[18px] h-[18px]" src="/Group.png" alt="" />
                            <span className="text-[14px] font-medium">Hotels</span>
                        </button>
                    </div>
                    <p className="font-medium text-[14px] text-[#737373]">
                        Need Some Help?
                    </p>
                </div>

                <div className='border border-[#E4E6E8] p-4 lg:p-5 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6'>

                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <p className="text-[14px] font-bold text-[#737373]">Location</p>
                        <div className="flex items-center gap-1">
                            <FaLocationDot className="text-gray-400" />
                            <select className="w-full lg:w-auto text-[14px] font-bold bg-transparent outline-none cursor-pointer">
                                <option value="">Select city</option>
                                <option value="dhaka">Dhaka, Bangladesh</option>
                            </select>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-[50px] bg-[#E4E6E8]"></div>

                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <p className="text-[14px] font-bold text-[#737373]">Check In & Check Out</p>
                        <div className="flex items-center gap-1">
                            <FaBusinessTime className="text-gray-400" />
                            <select className="w-full lg:w-auto text-[14px] font-bold bg-transparent outline-none cursor-pointer">
                                <option value="">Select dates</option>
                                <option value="today">Today</option>
                            </select>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-[50px] bg-[#E4E6E8]"></div>

                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <p className="text-[14px] font-bold text-[#737373]">Guest</p>
                        <div className="flex items-center gap-1">
                            <IoMdPerson className="text-gray-400" />
                            <select className="w-full lg:w-auto text-[14px] font-bold bg-transparent outline-none cursor-pointer">
                                <option value="">Select guests</option>
                                <option value="1">1 Guest</option>
                            </select>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 w-full lg:w-[151px] h-[58px] bg-[#0640C3] rounded-[50px] text-white transition hover:bg-blue-700 mt-2 lg:mt-0">
                        <CiSearch className="w-[18px] h-[18px]" />
                        <span className="text-[16px] font-bold">Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationSection;