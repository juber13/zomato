import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const PopularPlaces = () => {
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
      <div className='popular-location w-[90%] sm:max-w-5xl m-auto pt-10 sm:pt-20  sm:mb-6'>
        <h2 className='sm:text-4xl text-2xl font-[300] mb-4'>
          Popular localities in and around Delhi NCR
        </h2>
        <div className='place-container grid sm:grid-cols-3 gap-3 mt-10'>
          {places.map((item, index) => {
            return (
              <div key={item.totalPlaces}>
                <div className='place flex border p-2 items-center shadow-sm rounded-md justify-between'>
                  <div>
                    <p className='text-lg font-[350] text-gray-900'>
                      {item.place}
                    </p>
                    <span className='text-sm font-[300]'>
                      {item.totalPlaces} Places
                    </span>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            );
          })}

          <div className='place flex border p-2 items-center rounded-md justify-center'>
            <div>
              <p className='text-lg font-[400] text-gray-600 mr-3 '>see more</p>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPlaces;
