import React from "react";
import Navbar from "../components/Navbar";
import Rightdoublearrow from "../assets/icons/Rightdoublearrow";
import Sidecontainerimage from "../assets/icons/Sidecontainerimage";
import Rightarrow from "../assets/icons/Rightarrow";

//import Tradingviewwidget from "../components/Tradingviewwidget";
import Trendingcoinslist from "../components/Trendingcoinslist";
import Coininfo from "../components/Coininfo";
import ToggleSection from "../components/Togglesection";
import PerformanceSection from "../components/PerformanceSection";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#EFF2F5]">
      <div>
        <Navbar />
      </div>

      <div className="flex h-[17px] w-[115px] mt-20 py-4 px-14 items-center gap-3 ">
        <h1 className="text-[17px] text-[#3E5765]">Cryptocurrencies</h1>
        <div className="flex items-center justify-center text-black">
          <Rightdoublearrow />
        </div>

        <h1 className="text-[17px] font-semibold">Bitcoin</h1>
      </div>

      <div className="flex bg-[#EFF2F5] gap-5 px-14 top-[134px]">
        <div className="container w-[881px] h-screen  ">
          <div className="w-full h-[711px] bg-white rounded-[8px]">
 
               <div className="w-full h-[654px] p-6 flex flex-col gap-10">

                   <div>
                      
                   </div>
                   <div >
                    <Coininfo/>
                    <ToggleSection/>
                    <PerformanceSection/>
                   </div>
                    
               </div>


          </div>
        </div>
        <div className="side-container  flex flex-col gap-6 w-[427px] h-auto ">
          <div className="w-full h-[515px] bg-[#0052FE] px-4 py-[31px] flex flex-col gap-y-[19px] rounded-[8px]">
            <div className="w-[327px] h-[182px] gap-[14px] mx-auto">
              <div className="h-20 w-[268px] mx-auto ">
                <h1 className="text-white font-inter font-bold leading-[40px] tracking-normal  text-[24px] text-center ">
                  Get Started with KoinX for FREE
                </h1>
              </div>
              <div className="h-[68px] w-[327px] ">
                <h1 className="font-inter text-[14px] text-white  leading-[24px] tracking-normal text-center">
                  With our range of features that you can equip for free, KoinX
                  allows you to be more educated and aware of your tax reports.
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Sidecontainerimage />
            </div>

            <div className="flex items-center justify-center">
              <button className="font-semibold text-black rounded-[8px] px-6 py-2 bg-white font-inter flex items-center gap-2  w-[237px] h-[48px] text-center">
                Get Started for FREE 
                <Rightarrow/>
              </button>
            </div>
          </div>
          <div className="w-full bg-white rounded-[8px] p-6 h-[225px] flex flex-col gap-[24px] ">
                <h1 className="font-semibold font-inter text-[24px]">Trending Coins (24h)</h1>
                <Trendingcoinslist/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
