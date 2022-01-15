import React from 'react'
import FarmsIntroduction from "./farmsIntroduction";
import PoolsAndFarmsFooter from "./../../common/Footers/PoolsAndFarmsFooter/poolsFarmsFooter";
import FarmsContent from "./farmsContent";

const Farms: React.FC = () => {

  return (
    <div className="farms">
      <FarmsIntroduction />
      <FarmsContent />
      <PoolsAndFarmsFooter />
    </div>
  )
}

export default Farms
