import React from 'react';

const Finsection = () => {
    return (
        <section className="relative conta w-full bg-[#0640C3] min-h-[450px] md:h-[501px] mb-16   flex items-center overflow-hidden font-['Manrope']">

            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                <img
                    src="/shadow.png"
                    alt=""
                    className="absolute top-[200px] -translate-y-1/2 opacity-40 object-contain"
                />
            </div>


            <div className="absolute right-0  top-16 opacity-35 pointer-events-none">
                <img
                    src="/shadow.png"
                    alt=""
                    className="w-[250px] md:w-[450px] lg:w-auto object-contain"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl">
              
                    <h1 className="font-extrabold text-white leading-tight mb-4
                        text-[30px] sm:text-[40px] md:text-[48px]">
                        Find The Best Travel <br className="hidden sm:block" />
                        Deals Instantly With AI!
                    </h1>

           
                    <p className="text-white/80 font-light max-w-2xl mb-8
                        text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                        No more endless searching! Our AI scans thousands of travel packages to find you the best
                        deals - Whether it’s a budget getaway or a luxury escape, we’ll match you with the best deal
                        — instantly!
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#" className="hover:opacity-90 transition-all active:scale-95">
                            <img
                                src="/Links.png"
                                alt="App Store"
                                className="h-[44px] md:h-[54px] w-auto"
                            />
                        </a>
                        <a href="#" className="hover:opacity-90 transition-all active:scale-95">
                            <img
                                src="/Link.png"
                                alt="Google Play"
                                className="h-[44px] md:h-[54px] w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Finsection;