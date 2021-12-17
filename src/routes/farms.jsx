import React, { useState } from "react";
import Navbar from "../common/Navbar";
import FarmsIntroduction from "./../components/farmsIntroduction";
import FarmsContent from "./../components/farmsContent";
import ConnectWalletModal from "../modals/connectWalletModal";
import PoolsAndFarmsFooter from "../common/poolsFarmsFooter";

const Farms = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="farms">
      <Navbar setShow={setShow} />
      <ConnectWalletModal show={show} setShow={setShow} />
      <FarmsIntroduction />
      <FarmsContent />
      <PoolsAndFarmsFooter />
    </div>
  );
};

export default Farms;
