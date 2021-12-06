import React from "react";
import "../css/poolsContent.css";
import List from "../assets/images/List.png";
import Menu from "../assets/images/Menu.png";
import PoolsCard from "../common/poolsCard";
import ZinaxLogo from "../assets/images/zinax-logo.png";
import BinanceLogo from "../assets/images/binance-logo.png";

const PoolsContent = () => {
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
            <img src={List} alt="list" />
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </div>

      <div className="pools-body">
        <PoolsCard
          tokenNames="ZINAX-BNB"
          tokenImg1={ZinaxLogo}
          tokenImg2={BinanceLogo}
        />
      </div>
    </div>
  );
};

export default PoolsContent;
