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
        <div className="w-full py-12 md:py-20 font-[Manrope]">

            <div className="max-w-[1280px] mx-auto px-4 relative">

                {/* CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {Info.map((item) => (
                        <div
                            key={item.id}
                            style={{ backgroundImage: `url(/${item.bg})` }}
                            className={`relative bg-contain bg-no-repeat bg-center w-full h-[232px] rounded-2xl overflow-hidden flex
                        ${item.id === 1 ? 'justify-end' : 'justify-start'}
                        ${item.id === 3 ? 'bg-white' : ''}`}
                        >

                            <div className={`relative z-10 p-5
                            ${item.id === 1 ? 'text-right' : 'text-left'}
                            ${item.id !== 1 ? 'text-black' : ''}`}>

                                <div className="mt-12">
                                    {renderTitle(item)}
                                </div>

                                <button
                                    className={`absolute top-[170px] w-[128.41px] h-[32px] rounded-full text-white ${item.buttonColor} flex items-center justify-center gap-2 text-sm
                                ${item.id === 1 ? 'left-[62px]' : ''}`}
                                >
                                    <span>View More</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
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

                {/* ARROWS (NOW BELOW ON SMALL, SIDE ON LARGE) */}
                <div className="flex justify-center lg:justify-between items-center mt-6 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-full px-2">

                    {/* LEFT */}
                    <button className="bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* RIGHT */}
                    <button className="bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default TravelCarousel;