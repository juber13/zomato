import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Hero = () => {
  return (
    <div className=''>
      <div className='bg-center items-center bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)] h-[59vh] object-contain bg-cover '>
        <nav className='flex justify-between sm:justify-around text-white py-4 text-lg  p-4 '>
          <div className='logo text-sm font-normal flex items-center gap-1'>
            <IoLogoApple />
            <span>Get the App</span>
          </div>
          <div className='list-menu hidden sm:flex gap-9 font-[300] text-[17px]'>
            <a href='#'>Investor Relations</a>
            <a href='#'>Add restaurent</a>
            <a href='#'>Log in</a>
            <a href='#'>Sign up</a>
          </div>

          <div className='mobile-view sm:hidden text-4xl'>
            <IoMenu />
          </div>
        </nav>

        <div className='content-wrapper flex flex-col items-center justify-center mt-14 gap-8'>
          <img
            src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
            alt=''
            className='w-[250px]'
          />

          <h2 className='sm:text-4xl text-1xl  text-white font-[400]'>
            Discover the best food & drinks in Delhi NCR
          </h2>

          <div className='input-container w-[80%] flex flex-col sm:flex-row items-center justify-center sm:bg-white gap-3  p-3 sm:max-w-2xl rounded-md'>
            <div className='flex items-center border-r-2 bg-white bg-none sm:p-0 p-3 w-full'>
              <TiLocation
                style={{ color: "#FF7E8B" }}
                className='text-2xl mr-1'
              />
              <input
                type='text'
                className='text-sm w-full sm:w-none outline-none font-[300]'
                placeholder='Sector 29 , Gurugram'
              />
              <IoMdArrowDropdown className='text-2xl text-gray-500' />
            </div>
            <div className='flex items-center w-full  text-gray-700 bg-white sm:bg-none p-3 sm:p-0'>
              <CiSearch className='text-2xl text-gray-600 mr-2' />
              <input
                type='text'
                className='w-full text-xs sm:text-sm font-[300] text-gray-1000 outline-none'
                placeholder='Search for restaurent ,cuisine or a dish'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='feature flex gap-5 items-center justify-center sm:mt-10 pb-6 flex-wrap p-3 sm:p-0'>
        <div className='boxs cursor-pointer shadow-sm hover:scale-500 duration-100 border rounded-xl w-full sm:max-w-xs border-gray-300 overflow-hidden'>
          <img
            className='w-full h-[150px] object-cover'
            src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
            alt=''
          />
          <div className='p-3'>
            <h2 className='text-gray-700 text-[18px]'>Order Online</h2>
            <p className='text-md text-gray-800 font-[300]'>
              Stay home and order to your doorstep
            </p>
          </div>
        </div>

        <div className='boxs cursor-pointer shadow-sm hover:scale-500 duration-100 border  rounded-xl w-full  sm:max-w-xs border-gray-300 overflow-hidden'>
          <img
            className='w-full h-[150px] object-cover bg-cover'
            src='https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
            alt=''
          />
          <div className='p-3'>
            <h2 className='text-gray-700 text-[18px]'>Dining</h2>
            <p className='text-md text-gray-800 font-[300]'>
              View the city's favourite dining venues
            </p>
          </div>
        </div>

        <div className='boxs cursor-pointer shadow-sm hover:scale-500 duration-100 border rounded-xl w-full  sm:max-w-xs border-gray-300 overflow-hidden'>
          <img
            className='w-full h-[150px] object-cover bg-cover'
            src='https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*'
            alt=''
          />
          <div className='p-3'>
            <h2 className='text-gray-700 text-[18px] font-[400]'>
              Live Events
            </h2>
            <p className='text-md text-gray-800 font-[300]'>
              Discover India’s best events & concerts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
