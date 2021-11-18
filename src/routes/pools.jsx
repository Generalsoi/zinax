import React from "react";
import "../css/pools.css";
import PoolsIntroduction from "../components/poolsIntroduction";
import Navbar from "../common/Navbar";

const Pools = () => {
  return (
    <div className="pools">
      <Navbar />
      <PoolsIntroduction />
    </div>
  );
};

export default Pools;
