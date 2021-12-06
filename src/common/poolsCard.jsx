import React from "react";
import "../css/poolsCard.css";

const PoolsCard = (props) => {
  const { tokenNames, tokenImg1, tokenImg2, multiplier, aprValue } = props;
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
    </div>
  );
};

export default PoolsCard;
