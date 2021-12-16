//Everything is the same as pools hence the same codebase as poolsCard.jsx
//Just know that in place of pools, we have farms instead.

import React from "react";
import "../css/poolsCard.css";
import Button from "./button";

const FarmsCard = (props) => {
  const {
    tokenNames,
    tokenImg1,
    tokenImg2,
    multiplier,
    aprValue,
    earnedValue,
    liquidityValue,
    viewState,
    setShow,
  } = props;
  return (
    <div className="pools-card">
      <div className="pools-card-header">
        <h3>{tokenNames}</h3>
        <div>
          <img src={tokenImg1} alt="" />
          <img src={tokenImg2} alt="" />
        </div>
      </div>
      <div className="pools-multiplier-apr">
        <div>
          <p>{multiplier}</p>
          <p>Multiplier</p>
        </div>
        <div>
          <p>{aprValue}</p>
          <p>APR</p>
        </div>
      </div>
      <div className="earned-tokens">
        <h6>Earned</h6>
        <p>{earnedValue}</p>
      </div>
      <div className="liquidity-amount">
        <h6>Liquidity</h6>
        <p>{liquidityValue}</p>
      </div>
      <div className="time-buttons">
        <Button
          buttonContent="Stake Now"
          buttonStyles="stakeNowButton"
          setShow={setShow}
        />
      </div>
    </div>
  );
};

export default FarmsCard;
