import React from 'react'
import Rightdoublearrow from '../assets/icons/Rightdoublearrow'

const Pageheader = () => {
  return (
    <div className="flex h-[17px] w-[115px] mt-20 py-4 px-14 items-center gap-3 ">
        <h1 className="text-[17px] text-[#3E5765]">Cryptocurrencies</h1>
        <div className="flex items-center justify-center text-black">
          <Rightdoublearrow />
        </div>

        <h1 className="text-[17px] font-semibold">Bitcoin</h1>
      </div>
  )
}

export default Pageheader