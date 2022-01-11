import React, { useState } from "react";
import FarmsIntroduction from "./../../components/Introduction/Farms/farmsIntroduction";
import PoolsAndFarmsFooter from "./../../common/Footers/PoolsAndFarmsFooter/poolsFarmsFooter";
import FarmsContent from "./../../components/Content/Farms/farmsContent";
import Navbar from "./../../common/Navbar/Navbar";

const Farms = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="farms">
      <Navbar setShow={setShow} />
      <FarmsIntroduction />
      <FarmsContent />
      <PoolsAndFarmsFooter />
    </div>
  );
};

export default Farms;
