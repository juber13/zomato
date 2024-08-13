import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ZomantoApp = () => {
  const [explore, setExplore] = useState([
    "Popular cuisines near me",
    "Popular restaurant types near me",
    "Top Restaurant Chains",
    "Cities We Deliver To",
  ]);
  return (
    <>
      <div className='play-store-app-container w-full bg-[#FFFBF7] flex items-center justify-center p-10 mt-10 sm:mt-32'>
        <div className='flex flex-col sm:flex-row  h-[100%] p-6 gap-10'>
          <div className='img-container sm:mt-16'>
            <img
              src='../../images/f773629053b24263e69f601925790f301680693809.avif'
              className='w-[230px]'
              alt=''
            />
          </div>
          <div className='form-container'>
            <h3 className='sm:text-5xl text-2xl'>Get the Zomato app</h3>
            <p className='mt-5 text-sm font-[300]'>
              We will send you a link, open it on your phone to download the app
            </p>

            <form className='flex flex-col gap-4'>
              <div className='flex gap-8 mt-5'>
                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='link'
                    value='email'
                    className='w-[15px]'
                  />
                  <label htmlFor='email' className='text-sm font-[300]'>
                    Email
                  </label>
                </div>

                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='link'
                    value='phone'
                    className='w-[15px]'
                  />
                  <label htmlFor='phone' className='text-sm font-[300]'>
                    Phone
                  </label>
                </div>
              </div>

              <div className="flex gap-4 flex-col sm:flex-row">
                <input
                  type='text'
                  className='border mr-2 px-4 py-2   rounded-md  border-1-gray font-[300]'
                  placeholder='Email'
                />
                <button className='bg-[#F87171] px-4 py-2 font-[300] text-white rounded-md'>
                  Share App Link
                </button>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-600'>Download app from</p>
                <div className='flex gap-4 w-[130px]'>
                  <img
                    src='../../images/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp'
                    alt=''
                  />
                  <img
                    src='../../images/23e930757c3df49840c482a8638bf5c31556001144.webp'
                    alt=''
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='explore-options w-[90%] max-w-5xl m-auto pt-10 mb-10'>
        <h3 className='sm:text-3xl text-xl text-gray-600'>Explore options near me</h3>
        <div className='options mt-3'>
          {explore.map((item, index) => {
            return (
              <div
                className='option flex text-gray-600 items-center justify-between border w-full p-4 sm:text-lg text-sm font-[400] rounded-md mt-4'
                key={index}
              >
                <p>{item}</p>
                <MdKeyboardArrowDown />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ZomantoApp;
