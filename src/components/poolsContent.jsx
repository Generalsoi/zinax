import React, { useState } from "react";
import "../css/poolsContent.css";
import List from "../assets/images/List.png";
import Menu from "../assets/images/Menu.png";
import PoolsCard from "../common/poolsCard";
import PoolsAccordion from "../common/poolsAccordion";
import ZinaxLogo from "../assets/images/zinax-logo.png";
import BinanceLogo from "../assets/images/binance-logo.png";

const PoolsContent = () => {
  const [viewState, setViewState] = useState(1);
  return (
    <div className="pools-content">
      <div className="pools-header-content">
        <div className="pools-header-content-details">
          <div className="listed-pools">
            <div>
              <p>Whitelisted</p>
            </div>
            <div>
              <p>Non-whitelisted</p>
            </div>
          </div>

          <div className="live-or-finished-pools">
            <div>
              <p>Live</p>
            </div>
            <div>
              <p>Finished</p>
            </div>
            <img
              src={List}
              alt="list"
              onClick={() => {
                setViewState(0);
              }}
            />
            <img
              src={Menu}
              alt="menu"
              onClick={() => {
                setViewState(1);
              }}
            />
          </div>
        </div>
      </div>

      <div className={`pools-body ${viewState ? "" : ""}`}>
        {viewState ? (
          <PoolsCard
            tokenNames="ZINAX-BNB"
            tokenImg1={ZinaxLogo}
            tokenImg2={BinanceLogo}
            multiplier="40X"
            aprValue="2.72%"
            earnedValue="120"
            liquidityValue="$780,344"
          />
        ) : (
          <PoolsAccordion
            tokenNames="ZINAX-BNB"
            tokenImg1={ZinaxLogo}
            tokenImg2={BinanceLogo}
            multiplier="40X"
            aprValue="2.72%"
            earnedValue="120"
            liquidityValue="$780,344"
          />
        )}
      </div>
    </div>
  );
};

export default PoolsContent;
