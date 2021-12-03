import React from "react";
import "../css/poolsHeader.css";
import List from "../assets/images/List.png";
import Menu from "../assets/images/Menu.png";

const PoolsHeader = () => {
  return (
    <div className="pools-header">
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
    </div>
  );
};

export default PoolsHeader;
