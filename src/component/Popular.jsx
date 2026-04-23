import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';

const Popular = () => {
    const [popular,setPopular] =useState([])

    useEffect(()=>{

        fetch('./PopularDestinations.json')
        .then(res => res.json())
        .then(data => setPopular(data))


    },[])


    return (
        <div className='py-[146px] font-[Manrope] container mx-auto'>
           <div className='pb-12'>
                <h1 className='text-[52px] font-extrabold '>Popular Destinations</h1>
                <p className='text-[20px] text-[#737373]'>Favorite destinations based on customer reviews</p>
           </div>

           <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    popular.map((item)=><PopularCard key={item.id} item={item}/>)
                }
           </div>
        </div>
    );
};

export default Popular;