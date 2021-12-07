import React from "react";
import "../css/poolsAccordion.css";

const PoolsAccordion = (props) => {
  const {
    tokenImg1,
    tokenImg2,
    tokenNames,
    earnedValue,
    aprValue,
    liquidityValue,
    multiplier,
  } = props;
  return (
    <div className="pools-accordion">
      <div className="pools-accordion-item">
        <div className="pools-accordion-title">
          <div className="pools-accorrdion-header">
            <div className="images">
              <img src={tokenImg1} alt="token-one" />
              <img src={tokenImg2} alt="token-two" />
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

        <div className="pools-accordion-content"></div>
      </div>
    </div>
  );
};

export default PoolsAccordion;
