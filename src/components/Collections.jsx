import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Collections = () => {
  const [places, setPlaces] = useState([
    { place: "Connaught Place", totalPlaces: 203 },
    { place: "Rajouri Garden", totalPlaces: 145 },
    { place: "Golf Course Road", totalPlaces: 453 },
    { place: "Sector 29", totalPlaces: 345 },
    { place: "Saket", totalPlaces: 234 },
    { place: "DLF Phase 4", totalPlaces: 284 },
    { place: "Sector 18, Noida", totalPlaces: 382 },
    { place: "DLF Cyber City", totalPlaces: 493 },
  ]);
  return (
    <>
      <div className='collctions-container w-[90%] max-w-5xl m-auto sm:mt-10 sm:mb-10'>
        <h1 className='text-4xl mb-1'>Collections</h1>
        <div className='flex justify-between flex-col sm:flex-row items-start gap-3 sm:gap-1'>
          <p className='font-[300] text-gray-800  text-left text-sm md:text-[18px]'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </p>
          <span className='flex text-sm font-[300] items-center text-red-500'>
            All collections in Delhi NCR <IoMdArrowDropright />
          </span>
        </div>

        <div className='trends mt-5 flex sm:flex-row flex-col gap-2'>
          <div className="box md:w-[240px] h-[300px] w-full  rounded-lg overflow-hidden object-cover bg-cover bg-[url('../images/684397cd092de6a98862220e8cc40aca_1709810183.avif')]">
            <div className='overlay w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/70 flex items-end'>
              <div className='text-white px-6 py-2 font-[300]'>
                <h2 className='text-md text-white'>Top Trending sport</h2>
                <h2 className='flex items-center'>
                  29 places <IoMdArrowDropright />
                </h2>
              </div>
            </div>
          </div>

          <div className="box md:w-[240px] h-[300px] w-full rounded-lg overflow-hidden object-cover bg-cover bg-[url('../images/fbd237478a5d3b6ea08de83c30230cdd_1705558245.avif')] ">
            <div className='overlay w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/70 flex items-end'>
              <div className='text-white px-6 py-2 font-[300]'>
                <h2 className='text-md text-white'>Top Trending sport</h2>
                <h2 className='flex items-center'>
                  29 places <IoMdArrowDropright />
                </h2>
              </div>
            </div>
          </div>
          <div className="box md:w-[240px] h-[300px] w-full  rounded-lg overflow-hidden object-cover bg-cover bg-[url('../images/7771cf3a18e1da2916794d3998260c69_1705557723.avif')] ">
            <div className='overlay w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/70 flex items-end'>
              <div className='text-white px-6 py-2 font-[300]'>
                <h2 className='text-md text-white'>Top Trending sport</h2>
                <h2 className='flex items-center'>
                  29 places <IoMdArrowDropright />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
