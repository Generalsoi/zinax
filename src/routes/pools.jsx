import React, { useState } from "react";
import "../css/pools.css";
import PoolsIntroduction from "../components/poolsIntroduction";
import Navbar from "../common/Navbar";
import PoolsContent from "./../components/poolsContent";
import PoolsAndFarmsFooter from "../common/poolsFarmsFooter";
import ConnectWalletModal from "./../modals/connectWalletModal";

const Pools = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="pools">
      <Navbar setShow={setShow} />
      <ConnectWalletModal show={show} setShow={setShow} />
      <PoolsIntroduction />
      <PoolsContent />
      <PoolsAndFarmsFooter />
    </div>
  );
};

export default Pools;
