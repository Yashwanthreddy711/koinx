import React from 'react'
import Coininfo from './Coininfo'
import ToggleSection from './Togglesection'
import PerformanceSection from './PerformanceSection'
import SentimentSection from './SetimentSection'
import About from './About'
import Tokenomics from './Tokenomics'
import TeamCard from './TeamCard'


const MainContainer = () => {
  return (
  
  <div className="container w-full lg:w-[966px] h-full bg-[#EFF2F5] ">
 
       <div className="flex flex-col w-full gap-10 px-6 ">
            <Coininfo/>
            <ToggleSection/>
            <PerformanceSection/>
            <SentimentSection/>
            <About/>
            <Tokenomics/>
            <TeamCard/>
            
  </div>
</div>
  )
}

export default MainContainer