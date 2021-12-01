import React from "react";
import "../css/aboutUs.css";
import ZinaxLogo from "../images/zinaxcoin.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h3>About Us</h3>
      <div className="about-us-content">
        <img src={ZinaxLogo} alt="Zinax-logo" />
        <div>
          <h4>
            <span>ZINAX;</span> The revolution just began
          </h4>
          <p>
            Detractors of DeFi, NFTs, Social tokens all have one stone, lack of
            real life utility.
          </p>
          <p>
            Most DeFi tokens don’t resonate with our everyday life, and the
            projects usually have no real life utility.
          </p>
          <p>
            Zinax brings utility to DeFi. We bring startups building real life
            companies, NFTs with tangible use cases, Social tokens from everyday
            names and play-to-earn games that are based on real life situations.
          </p>
          <p>
            <span class="second-span">
              Zinax is the revolution of the blockchain, from hype to real life.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
