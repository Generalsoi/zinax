import React from "react";
import "../css/pools.css";
import PoolsIntroduction from "../components/poolsIntroduction";
import Navbar from "../common/Navbar";
import PoolsHeader from "../components/poolsHeader";

const Pools = () => {
  return (
    <div className="pools">
      <Navbar />
      <PoolsIntroduction />
      <PoolsHeader />
    </div>
  );
};

export default Pools;
