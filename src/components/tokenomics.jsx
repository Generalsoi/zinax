import React from "react";
import "../css/tokenomics.css";
import Bar from "../images/bar.png";

const Tokenomics = () => {
  return (
    <section className="tokenomics">
      <h3>Tokenomics</h3>
      <div className="tokenomics-content">
        <div>
          <p>Total Liquidity</p>
          <h5>$12,000,000</h5>
        </div>
        <div>
          <p>Current Price</p>
          <h5>$0.5</h5>
        </div>
        <div>
          <p>Total Amount Locked in Pools</p>
          <h5>2,000,000</h5>
        </div>
        <div>
          <p>Liquidity Providers</p>
          <h5>1,000,000</h5>
        </div>
      </div>

      <div className="tokenomics-img">
        <img src={Bar} alt="bar" />
      </div>
    </section>
  );
};

export default Tokenomics;