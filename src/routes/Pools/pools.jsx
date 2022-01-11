import React, { useState } from "react";
import "./pools.css";
import PoolsIntroduction from "../../components/Introduction/Pools/poolsIntroduction";
import Navbar from "../../common/Navbar/Navbar";
import PoolsContent from "../../components/Content/Pools/poolsContent";
import PoolsAndFarmsFooter from "../../common/Footers/PoolsAndFarmsFooter/poolsFarmsFooter";

const Pools = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="pools">
      <Navbar setShow={setShow} />
      <PoolsIntroduction />
      <PoolsContent />
      <PoolsAndFarmsFooter />
    </div>
  );
};

export default Pools;
