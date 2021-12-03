import React from "react";
import "../css/tokenomics.css";
import Bar from "../assets/images/bar.png";

const Tokenomics = () => {
  return (
    <section className="tokenomics">
      <h3>Metrics</h3>
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
    </section>
  );
};

export default Tokenomics;
