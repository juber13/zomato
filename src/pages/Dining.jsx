import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { CiFilter } from "react-icons/ci";
import Collections from '../components/Collections';
import Restaurents from '../components/Restaurents';

const Dinnig = () => {
    const elementRef = useRef();
    const elementRef2 = useRef();
    const [isFixed, setIsFixed] = useState(false);
    const [isFixed2, setIsFixed2] = useState(false);

    const handleStickey = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            setIsFixed(rect.top <= 20); // Use a threshold for the first element
        }

        if (elementRef2.current) {
            const rect2 = elementRef2.current.getBoundingClientRect();
            setIsFixed2(rect2.top <= 100); // Use a threshold for the second element
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleStickey);
        return () => window.removeEventListener('scroll', handleStickey);
    }, []); // Run this effect only once

    return (
        <div>
            <header>
                <Header />
            </header>

            <div className="routes w-[75%] m-auto mt-2 text-xs text-gray-500">
                <p>Home / India / Delhi NCR / Central Delhi / Connaught Place Restaurants</p>
            </div>
            <div className={`${isFixed ? 'w-full shadow-md sticky top-0 left-0  z-10 bg-white text-md h-[80px]' : ''}`}>
                <div className={`menu flex gap-10 w-[75%] m-auto mt-3 `} ref={elementRef}>
                    <div className="dinning-out flex items-center gap-3 p-4 border-b-2 mt-[-4px] border-red-500">
                        <div className='w-[50px] h-[50px]  bg-[#E5F3F3] rounded-full flex items-center justify-center'>
                            <img src="../../images/spoon-plate.avif" alt="" className='w-[30px]' />
                        </div>
                        <h2 className='text-lg text-red-500'>Dining Out</h2>
                    </div>

                    <div className="dinning-out flex items-center gap-3">
                        <div className='w-[50px] h-[50px] bg-[#E5F3F3] rounded-full flex items-center justify-center'>
                            <img src="../../images/scooter.webp" alt="" className='w-[30px]' />
                        </div>
                        <h2 className='text-lg text-gray-500'>Delivery</h2>
                    </div>

                    <div className="dinning-out flex items-center gap-3 ">
                        <div className='w-[50px] h-[50px] bg-[#E5F3F3] rounded-full flex items-center justify-center'>
                            <img src="../../images/bootle.webp" alt="" className='w-[30px]' />
                        </div>
                        <h2 className='text-lg text-gray-500'>Nightlife</h2>
                    </div>
                </div>
            </div>

            <div className="retaurents-list bg-[#F8F8F8] relative bottom-10  pb-1">
                <div className='relative right-10 top-4 mb-10'>
                    <Collections />
                </div>
            </div>

            <div className={`p-4 ${isFixed2 ? 'sticky top-0 left-0 shadow-md z-50 bg-white p-7' : ''}`} ref={elementRef2}>
                <div className={'text-sm text-gray-500 font-[300] flex gap-3 w-[80%] m-auto'}>
                    <a href="#" className="flex items-center p-2 border rounded-md text-xs"><CiFilter /> Filters</a>
                    <a href="#" className="p-2 border rounded-md">Offers</a>
                    <a href="#" className="p-2 border rounded-md">Rating: 4.0+</a>
                    <a href="#" className="p-2 border rounded-md">Pet Friendly</a>
                    <a href="#" className="p-2 border rounded-md">Outdoor Seating</a>
                    <a href="#" className="p-2 border rounded-md">Serves Alcohol</a>
                    <a href="#" className="p-2 border rounded-md">Open Now</a>
                </div>
            </div>

            <div className="filter flex flex-col gap-10 p-2 text-sm text-gray-400 w-[80%] m-auto">
                <div className="banner">
                    <img src="../../images/banner.avif" alt="" />
                </div>

                <div className="hotels">
                    <Restaurents />
                </div>
            </div>
        </div>
    );
};

export default Dinnig;
