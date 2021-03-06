import React, { useState } from "react";
import Button from "../../Button/button";
import "../accordion.css";

const PoolsAccordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const {
    tokenImg1,
    tokenImg2,
    tokenNames,
    earnedValue,
    aprValue,
    liquidityValue,
    multiplier,
    setShow,
  } = props;
  return (
    <div className="pools-accordion">
      <div className="pools-accordion-item">
        <div
          className="pools-accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="pools-accorrdion-header">
            <div className="images">
              <img src={tokenImg1} alt="token-one" />
            </div>
            <h3>{tokenNames}</h3>
          </div>

          <div className="earnedTokens">
            <h6>Earned</h6>
            <p>{earnedValue}</p>
          </div>

          <div className="apr-value">
            <h6>APR</h6>
            <p>{aprValue}</p>
          </div>

          <div className="liquidityAmount">
            <h6>Liquidity</h6>
            <p>{liquidityValue}</p>
          </div>

          <div className="multiplier-value">
            <h6>Multiplier</h6>
            <p>{multiplier}</p>
          </div>
        </div>
        {isActive && (
          <div className="pools-accordion-content">
            <div>
              <a href="#" target="_blank" rel="noreferrer">
                Buy {tokenNames} LP
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Preview Contract
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                See Pair Details
              </a>
            </div>

            <div className="">
              <Button
                buttonContent="Stake"
                buttonStyles="stakeButton"
                setShow={setShow}
              />
            </div>

            <div className="">
              <Button buttonContent="Harvest" buttonStyles="harvestButtonOne" />
              <Button
                buttonContent="Withdraw"
                buttonStyles="withdrawButtonOne"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoolsAccordion;
