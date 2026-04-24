import React from 'react';

const TrustedSection = () => {
    return (
    
        <div className='mt-10 lg:-mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center font-[Manrope] px-4'>

            <div className='w-full lg:w-[370px] h-auto lg:h-[68px] text-center lg:text-left'>
                <h1 className='font-extrabold text-[24px] pb-2'>Trusted by</h1>
                <p className='text-[#737373] text-[14px] md:text-[16px]'>
                    We are a trusted partner of airlines, payment
                    gateways, and travel services around the world.
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 lg:gap-4 pt-4 lg:pt-16'>
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust1.png" alt="" />
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust2.png" alt="" />
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust3.png" alt="" />
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust4.png" alt="" />
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust5.png" alt="" />
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust6.png" alt="" />
                <img className="h-6 md:h-8 lg:h-auto object-contain" src="/trust7.png" alt="" />
            </div>
        </div>
    );
};

export default TrustedSection;