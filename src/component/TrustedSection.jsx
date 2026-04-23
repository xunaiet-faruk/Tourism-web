import React from 'react';

const TrustedSection = () => {
    return (
        <div className='-mt-20 flex gap-12 justify-center items-center font-[Manrope]'>
            <div className='w-[370px] h-[68px]'>
                <h1 className='font-extrabold text-[24px] pb-2'>Trusted by</h1>
                <p className='text-[#737373]'>We are a trusted partner of airlines, payment
                    gateways, and travel services around the world.</p>
            </div>
            <div className='flex gap-4 pt-16'>
                <img src="/trust1.png" alt="" />
                <img src="/trust2.png" alt="" />
                <img src="/trust3.png" alt="" />
                <img src="/trust4.png" alt="" />
                <img src="/trust5.png" alt="" />
                <img src="/trust6.png" alt="" />
                <img src="/trust7.png" alt="" />

            </div>
        </div>
    );
};

export default TrustedSection;