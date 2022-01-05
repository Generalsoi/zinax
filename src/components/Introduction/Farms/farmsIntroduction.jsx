import React from "react";
import "../Pools/poolsIntroduction.css";

const FarmsIntroduction = () => {
  return (
    <div class="pools-intro">
      <h3>Zinax Farms</h3>
      <span>
        <p>
          Don’t leave your crypto tokens lying fallow in your wallet. Get
          interests on your tokens by staking them in the zinax pool to earn
          rewards.
        </p>
      </span>
      <p>You can unstake anytime or stake in our time based Farms</p>
      <div className="pools-input-bar">
        <input placeholder="Search for pool address or symbol" />
      </div>
    </div>
  );
};

export default FarmsIntroduction;
