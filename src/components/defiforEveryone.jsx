import React from "react";
import "../css/defiForEveryone.css";
import BlockchainCube from "../assets/images/cube.png";

const DefiForEveryone = () => {
  return (
    <section className="defi-for-everyone">
      <h3>
        <span>DEFI</span> for Everyone
      </h3>
      <div className="defi-for-everyone-content">
        <img src={BlockchainCube} alt="blockchain-cube" />
        <div>
          <p>
            We all have our Favourite celebrities and brands. What if we could
            make money by stanning them? With Zinax, you can buy their tokens
            very early and make lots of profit as they grow.
          </p>
          <ul>
            <li>
              <span>Household Names</span> We thoroughly sieve applications to
              ensure that only viable tokens from top influencers get listed.
            </li>
            <li>
              <span>High Yield</span> We list projects with potential, so your
              investment can get you high returns
            </li>
            <li>
              <span>Personalized Options</span> Choose the DeFi option that
              suits you the most
            </li>
          </ul>
        </div>
      </div>
      <div className="decentralised">Decentralised Economy</div>
      <div className="decentralised-line"></div>
    </section>
  );
};

export default DefiForEveryone;
