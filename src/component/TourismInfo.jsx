import React from 'react';
import LocationSection from './LocationSection';
import TrustedSection from './TrustedSection';

const TourismInfo = () => {
    return (
        <div className='w-full bg-[#E8ECF9] h-auto lg:h-[318px] pb-10 lg:pb-0 mx-auto'>
            <div className="container mx-auto px-4 lg:px-0">
                <LocationSection />
                <TrustedSection />
            </div>
        </div>
    );
};

export default TourismInfo;