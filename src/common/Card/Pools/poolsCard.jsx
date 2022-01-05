import React from "react";
import "./poolsCard.css";
import Button from "../../Button/button";

const PoolsCard = (props) => {
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
      <div className="just-pools-card-header">
        <h3>{tokenNames}</h3>
        <div>
          <img src={tokenImg1} alt="" />
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
        <div>
          <h6>Earned</h6>
          <p>{earnedValue}</p>
        </div>
        <Button
          buttonContent="Harvest"
          buttonStyles="harvestButton"
          setShow={setShow}
        />
      </div>
      <div className="liquidity-amount">
        <h6>Liquidity</h6>
        <p>{liquidityValue}</p>
      </div>
      <div className="time-buttons">
        <Button
          buttonContent="Stake"
          buttonStyles="stakeNowButton"
          setShow={setShow}
        />
        <Button
          buttonContent="Withdraw"
          buttonStyles="withdrawButton"
          setShow={setShow}
        />
      </div>
    </div>
  );
};

export default PoolsCard;
