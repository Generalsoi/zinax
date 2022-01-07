import React from "react";
import ZinaxLogo from "../../../assets/images/zinaxcoin.png";
import Button from "../../../common/Button/button";
import "./introduction.css";
import { Link } from "react-router-dom";

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
        <a
          href="https://www.pinksale.finance/#/launchpad/0x1c92300Af28756713C9d1D5C2E4B5F9A6aB09743?chain=BSC"
          target="_blank"
          rel="noreferrer"
        >
          <button className="presale-btn">Presale</button>
          {/* <Button buttonContent="Presale" buttonStyles="presale-btn" /> */}
        </a>

        <a
          href="https://medium.com/@zinari/how-to-participate-in-the-zinax-phase-1-ido-336d98166995"
          target="_blank"
          rel="noreferrer"
        >
          <button className="learnMore-btn">Learn More</button>
          {/* <Button buttonContent="Learn More" buttonStyles="learnMore-btn" /> */}
        </a>
      </div>
    </section>
  );
};

export default Introduction;
