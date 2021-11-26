import React from "react";
import "../css/poolsHeader.css";
import List from "../images/List.png";
import Menu from "../images/Menu.png";

const PoolsHeader = () => {
  return (
    <div className="pools-header">
      <div className="pools-header-content">
        <div className="pools-header-content-details">
          <div>
            <div>
              <p>Whitelisted</p>
            </div>
            <div>
              <p>Non-whitelisted</p>
            </div>
          </div>
          <div>
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
