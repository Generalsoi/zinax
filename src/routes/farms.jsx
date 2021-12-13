import React from "react";
import Navbar from "../common/Navbar";
import FarmsIntroduction from "./../components/farmsIntroduction";
import FarmsContent from "./../components/farmsContent";

const Farms = () => {
  return (
    <div className="farms">
      <Navbar />
      <FarmsIntroduction />
      <FarmsContent />
    </div>
  );
};

export default Farms;
