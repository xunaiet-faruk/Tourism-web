
import React from 'react';
import LocationSection from './LocationSection';
import TrustedSection from './TrustedSection';

const TourismInfo = () => {
    return (
        <div className='w-full bg-[#E8ECF9] h-[318px] mx-auto'>
            <div className="">
                <LocationSection />
                <TrustedSection/>
            </div>
        </div>
    );
};

export default TourismInfo;