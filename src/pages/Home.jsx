import React from "react";
import Navbar from "../components/Navbar";
import Sidecontainer from "../components/Sidecontainer";
import Pageheader from "../components/Pageheader";
import MainContainer from "../components/MainContainer";

const Home = () => {
  return (
    <div className="w-full h-full  bg-[#EFF2F5] ">
      <div>
        <Navbar />
      </div>
         <Pageheader/>
      <div className="flex bg-[#EFF2F5] w-full h-full gap-5 px-14 top-[134px]">
           <MainContainer/>
          <Sidecontainer/>
      </div>
    </div>
  );
};

export default Home;
