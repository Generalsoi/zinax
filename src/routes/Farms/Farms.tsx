import React from 'react'
import FarmsIntroduction from "./farmsIntroduction";
import PoolsAndFarmsFooter from "./../../common/Footers/PoolsAndFarmsFooter/poolsFarmsFooter";
import FarmsContent from "./farmsContent";
import Navbar from "../../common/Navbar/Navbar";

const Farms: React.FC = () => {

  return (
    <div className="farms">
      <Navbar/>
      <FarmsIntroduction />
      <FarmsContent />
      <PoolsAndFarmsFooter />
    </div>
  )
}

export default Farms
