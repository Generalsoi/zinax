import React from "react";
import "../css/poolsIntroduction.css";

const FarmsIntroduction = () => {
  return (
    <div class="pools-intro">
      <h3>Zinax Farms</h3>
      <span>
        <p>Stake Liquidity Pool Tokens and earn Zinax.</p>
      </span>
      <div className="pools-input-bar">
        <input placeholder="Search for pool address or symbol" />
      </div>
    </div>
  );
};

export default FarmsIntroduction;
