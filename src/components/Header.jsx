import React from 'react'


import { CiSearch } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex p-3 items-center justify-around w-[85%] m-auto'>
            <div className="logo flex gap-3 items-center  w-[65%]">
                <Link to="/"><img src="../../images/zomato.avif" alt="" className='w-[120px] object-cover' /></Link>

                <div className='input-container flex  gap-3 border p-3 w-full bg-white rounded-md shadow-md'>
                    <div className='flex items-center border-r-2'>
                        <TiLocation style={{ color: "#FF7E8B" }} className='text-2xl mr-1' />
                        <input type="text" className=' text-sm outline-none font-[300]' placeholder='Sector 29 , Gurugram' />
                        <IoMdArrowDropdown className='text-2xl' style={{ color: "gray" }} />
                    </div>
                    <div className='flex items-center w-full text-gray-700'>
                        <CiSearch className='text-2xl text-gary-400 mr-2' />
                        <input type="text" className='w-full text-sm font-[300] text-gray-1000 outline-none' placeholder='Search for restaurent ,cuisine or a dish' />
                    </div>
                </div>
            </div>

            <div className="login">
                <a href="#" className='p-3 text-md font-[400] text-gray-400'>Login</a>
                <a href="#" className='p-3 text-md font-[400] text-gray-400'>SignUp</a>
            </div>

        </div>
    )
}

export default Header