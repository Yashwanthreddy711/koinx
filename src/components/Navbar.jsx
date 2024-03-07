import React from 'react'
import Logo from '../assets/icons/Logo'

const Navbar = () => {
  return (
    <div className='fixed top-0 flex items-center justify-between w-full h-20 bg-white border-b border-gray-200 shadow-md px-14'>
        <div>
            <Logo/>
        </div>
        <ul className='flex gap-6 text-[19px] font-semibold text-[ #0F1629];
'>
            <h1 className=''>Crypro Taxes</h1>
            <h1>Free Tools</h1>
            <h1>Resource Center</h1>
            <div className='flex items-center justify-center w-32 h-10 p-2 text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]  rounded-[8px]'>Get Started</div>
        </ul>
    </div>
  )
}

export default Navbar