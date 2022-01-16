import React from 'react'
import PoolsIntroduction from "./poolsIntroduction";
import PoolsContent from "./poolsContent";
import PoolsAndFarmsFooter from "./poolsFarmsFooter";
import Navbar from "../../common/Navbar/Navbar";

const Farm: React.FC = () => {
  
  return (
    <div className="pools">
    <Navbar/>
    <PoolsIntroduction />
    <PoolsContent/>
    <PoolsAndFarmsFooter/>
    </div>
  )
}

export default Farm
