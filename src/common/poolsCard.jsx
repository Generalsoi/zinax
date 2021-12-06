import React from "react";
import "../css/poolsCard.css";

const PoolsCard = (props) => {
  const { tokenNames, tokenImg1, tokenImg2 } = props;
  return (
    <div className="pools-card">
      <div className="pools-card-header">
        <h3>{tokenNames}</h3>
        <div>
          <img src={tokenImg1} alt="" />
          <img src={tokenImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PoolsCard;
