import React, { useState } from "react";
import Navbar from "../common/Navbar";
import FarmsIntroduction from "./../components/farmsIntroduction";
import FarmsContent from "./../components/farmsContent";
import ConnectWalletModal from "../modals/connectWalletModal";

const Farms = () => {
  const [show, setShow] = useState(false);

  //   const handleClickConnect = () => {
  //     () => setShow(false);
  //   };

  return (
    <div className="farms">
      <Navbar setShow={setShow} />
      <ConnectWalletModal show={show} setShow={setShow} />
      <FarmsIntroduction />
      <FarmsContent />
    </div>
  );
};

export default Farms;
