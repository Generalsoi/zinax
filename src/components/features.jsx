import React from "react";
import Card from "../common/card";
import "../css/features.css";
import CreateTokenImg from "../images/createtoken.png";
import Crowdpooling from "../images/crowdpooling.png";
import NftsAndMore from "../images/nftsandmore.png";
import CreateIfos from "../images/createifos.png";
import Liquidity from "../images/liquidity.png";
import PredictAndEarn from "../images/predictandearn.png";
import Button from "../common/button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features" id="features">
      <h3>Features</h3>
      <div className="features-content">
        <Card
          cardImg={CreateTokenImg}
          cardHeading="Create Tokens"
          cardContent="With no codes, create & deploy your own custom tokens right away."
        />
        <Card
          cardImg={Crowdpooling}
          cardHeading="Crowdpooling"
          cardContent="Earn more, distribute tokens equally with our built in pools "
        />
        <Card
          cardImg={NftsAndMore}
          cardHeading="NFTs and More"
          cardContent="Design. Mint, Buy, and Trade NFTs on our platform"
        />
        <Card
          cardImg={CreateIfos}
          cardHeading="Create IFOs, IDOs, etc."
          cardContent="Raise funds, launch crypto projects, right here, no stress...  "
        />
        <Card
          cardImg={Liquidity}
          cardHeading="Liquidity Pools"
          cardContent="on your terms, build and own your custom liquidity markets."
        />
        <Card
          cardImg={PredictAndEarn}
          cardHeading="Predict & Earn"
          cardContent="Earn Rewards each time you predict the markets aright"
        />
      </div>
      <div className="features-btn">
        <a
          href="https://medium.com/@zinari/how-to-participate-in-the-zinax-phase-1-ido-336d98166995"
          target="_blank"
          rel="noreferrer"
        >
          <Button buttonContent="Learn More" buttonStyles="learnMore-btn" />
        </a>
      </div>
    </section>
  );
};

export default Features;
