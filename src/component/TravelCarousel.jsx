import React from 'react';

const TravelCarousel = () => {

    const Info = [
        {
            id: 1,
            title: "We Make Every Trips Special",
            bg: "slide3.png",
            buttonColor: "bg-[#FAB326] hover:bg-[#e5a020]",
            textColor: "text-white",
            variant: "style1"
        },
        {
            id: 2,
            headers: "Limited Offers",
            title: "Buy 1, Get 1 Free ",
            title2: "Attractions",
            bg: "slide1.png",
            buttonColor: "bg-[#0640C3] hover:bg-blue-700",
            textColor: "text-white",
            variant: "style2"
        },
        {
            id: 3,
            headers: "Limited Offers",
            title: "Buy 1, Get 1 Free",
            title2: "Attractions",
            bg: "slide2.png",
            buttonColor: "bg-[#FAB326] hover:bg-[#e5a020]",
            textColor: "text-white",
            textBgcolor: "bg-[#FAB326]",
            variant: "style3"
        },
    ];

    const renderTitle = (item) => {
        switch (item.variant) {

            case "style1":
                return (
                    <h2 className={`text-[18px] sm:text-[22px] md:text-[24px] text-start w-[193px] font-extrabold leading-tight 
                    ${item.id !== 1 ? 'text-black' : item.textColor}`}>
                        {item.title}
                    </h2>
                );

            case "style2":
                return (
                    <div className="flex flex-col">

                        <span className="text-[14px] sm:text-[16px] font-bold text-black">
                            {item.headers}
                        </span>

                        <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-extrabold text-black leading-snug">
                            {item.title}
                        </h2>

                        <span className="text-[18px] sm:text-[22px] md:text-[24px] font-extrabold text-black">
                            {item.title2}
                        </span>

                    </div>
                );

            case "style3":
                return (
                    <div className="flex flex-col items-start gap-2 -mt-11 ">
                        <span className="bg-white rounded-lg text-black px-3 py-1 font-bold">
                            {item.headers}
                        </span>

                        <span className="bg-white rounded-lg text-black px-3 font-bold text-[18px] sm:text-[22px] md:text-[24px]">
                            {item.title}
                        </span>

                        <span className="bg-white rounded-lg text-black px-3 font-bold text-[18px] sm:text-[22px] md:text-[24px]">
                            {item.title2}
                        </span>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full py-12 md:py-20 font-[Manrope] relative">

            {/* 🔥 LEFT ARROW (NO FUNCTION) */}
            <button className="hidden sm:flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* 🔥 RIGHT ARROW (NO FUNCTION) */}
            <button className="hidden sm:flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <div className="max-w-[1280px] mx-auto px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {Info.map((item) => (
                        <div
                            key={item.id}
                            style={{ backgroundImage: `url(/${item.bg})` }}
                            className={`relative bg-contain bg-no-repeat bg-center w-full h-[200px] sm:h-[220px] md:h-[232px] rounded-2xl overflow-hidden flex
                            ${item.id === 1 ? 'justify-end' : 'justify-start'}
                            ${item.id === 3 ? 'bg-white' : ''}`}
                        >

                            <div className={`relative z-10 p-4 sm:p-5
                                ${item.id === 1 ? 'text-right' : 'text-left'}
                                ${item.id !== 1 ? 'text-black' : ''}`}>

                                <div className="mt-6 sm:mt-10 md:mt-12">
                                    {renderTitle(item)}
                                </div>

                                <button
                                    className={`absolute bottom-4 sm:bottom-6 md:top-[170px] w-[110px] sm:w-[128px] h-[30px] sm:h-[32px] rounded-full text-white ${item.buttonColor} flex items-center justify-center gap-2 text-xs sm:text-sm
                                    ${item.id === 1 ? 'left-[20px] sm:left-[40px] md:left-[62px]' : 'left-[20px]'}`}
                                >
                                    <span>View More</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default TravelCarousel;