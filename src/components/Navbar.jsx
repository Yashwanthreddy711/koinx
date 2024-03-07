import React, { useState } from 'react'
import Logo from '../assets/icons/Logo'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [nav, setnav] = useState(true);
  // const auth=useSelector((state)=>state.auth.isAuth);
  const handlenav = () => {
    setnav(!nav);
  };

  return (
    <div className='fixed top-0 flex items-center justify-between w-full h-20 bg-white border-b border-gray-200 shadow-md px-14'>
        <div>
            <Logo/>
        </div>
        <ul className=' gap-6 text-[19px] hidden md:flex font-semibold text-[ #0F1629];
'>
            <h1 className=''>Crypro Taxes</h1>
            <h1>Free Tools</h1>
            <h1>Resource Center</h1>
            <div className='flex items-center justify-center w-32 h-10 p-2 text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]  rounded-[8px]'>Get Started</div>
        </ul>

        <div
          className={
            !nav
              ? "h-auto w-full left-0 top-0  bg-white border-r-gray-500 "
              : "fixed left-[-100%]"
          }
        >
      {/* Popup menu */}

      <div
              onClick={handlenav}
              className=" fixed right-2 block px-5 top-[20px] text-black md:hidden"
            >
              {!nav ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
      
        <div className="absolute right-0 py-5 mt-2 mr-2 bg-white rounded-md shadow-md md:hidden top-20">
          <div className="text-lg font-semibold text-[#0F1629] px-4 py-2">
            <div className="mb-2 cursor-pointer">Crypto Taxes</div>
            <div className="mb-2 cursor-pointer">Free Tools</div>
            <div className="cursor-pointer">Resource Center</div>
            <div>
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14 mt-4">
            Get Started
          </button>
        </div>
          </div>
        </div>
        </div>
      
    </div>
    
  )
}

export default Navbar