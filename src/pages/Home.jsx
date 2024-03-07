import React from "react";
import Navbar from "../components/Navbar";
import Sidecontainer from "../components/Sidecontainer";
import Pageheader from "../components/Pageheader";
import MainContainer from "../components/MainContainer";
import Youmayalslike from "../components/Youmayalsolike";

const Home = () => {
  return (
    <div className="w-full h-full bg-[#EFF2F5] ">
      <div>
        <Navbar />
      </div>
         <Pageheader/>
      <div className="flex bg-[#EFF2F5] w-full md:w-[966px] h-full gap-5 md:px-14 top-[134px]">
           <MainContainer/>
          <Sidecontainer/>
      </div>
      <div className="w-full md:px-20 rounded-[10px] px-5 ">
      <Youmayalslike/>
      </div>
      
    </div>
  );
};

export default Home;
