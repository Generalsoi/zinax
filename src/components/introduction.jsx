import React from "react";
import ZinaxLogo from "../images/zinaxcoin.png";
import Button from "../common/button";
import "../css/introduction.css";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-content-div">
        <div className="introduction-content child">
          <h3>Zinax; Home of Defi, and NFTs with real life Utilities.</h3>
          <p>
            Invest in social tokens, NFTs, Pools and Farms from Projects solving
            Real Life Problems
          </p>
        </div>
        <img src={ZinaxLogo} alt="zinax-logo" />
      </div>

      <div className="introduction-btns">
        <Button buttonContent="Launchpad" buttonStyles="launchpad-btn" />
        <Button buttonContent="Earn Now" buttonStyles="earnNow-btn" />
      </div>
    </section>
  );
};

export default Introduction;
