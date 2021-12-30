import React, { useState } from "react";
import "../css/stakingModal.css";
import ConnectImg from "../assets/images/connectImg.png";

const StakeModal = (props) => {
  const [showResults, setShowResults] = useState(true);
  const { show, setShow, balance } = props;
  if (!show) {
    return null;
  }
  return (
    <div className="modal timeless-staking" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="button">
            <button
              className="timeless"
              onClick={() => setShowResults(true)}
              autoFocus
            >
              Timeless Stakes
            </button>
            <button className="timebased" onClick={() => setShowResults(false)}>
              TimeBased Stakes
            </button>
          </div>
        </div>
        <div className="modal-body">
          {showResults === true ? (
            <form action="#">
              <div>
                <p>Earn Zinax as you Stake </p>
                <p>Liquidity Pools Token here</p>
              </div>
              <div className="balance-div">
                <div>
                  <p>Balance:</p>
                  <img src={ConnectImg} alt="connectimage" />
                </div>
                <p className="balance-value">{balance}</p>
              </div>
              <div className="amount">
                <label htmlFor="amount">Amount:</label> <br />
                <div>
                  <input type="number" id="amount" placeholder="Amount here" />
                  <button type="submit">MAX</button>
                </div>
              </div>
            </form>
          ) : (
            <form action="#">
              <div>
                <p>Earn more on our Timebased </p>
                <p>Farm Stake</p>
              </div>

              <div className="balance-div">
                <div>
                  <p>Balance:</p>
                  <img src={ConnectImg} alt="connectimage" />
                </div>
                <p className="balance-value">{balance}</p>
              </div>
              <div className="amount">
                <label htmlFor="amount">Amount:</label> <br />
                <div>
                  <input type="number" id="amount" placeholder="Amount here" />
                  <button type="submit">MAX</button>
                </div>
              </div>
              <div className="duration">
                <label htmlFor="duration">Duration:</label> <br />
                <input
                  type="number"
                  id="duration"
                  placeholder="Duration here"
                />
              </div>
            </form>
          )}
        </div>
        <div className="modal-footer">
          <button>Stake</button>
        </div>
      </div>
    </div>
  );
};

export default StakeModal;
