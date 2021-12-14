import React from "react";
import "../css/pools.css";
import PoolsIntroduction from "../components/poolsIntroduction";
import Navbar from "../common/Navbar";
import PoolsContent from "./../components/poolsContent";

const Pools = () => {
  return (
    <div className="pools">
      <Navbar page="1" />
      <PoolsIntroduction />
      <PoolsContent />
    </div>
  );
};

export default Pools;
