import React from "react";
import "../css/timelessStakingModal.css";

const TimelessStaking = (props) => {
  const [showResults, setShowResults] = React.useState(true);
  const { show, setShow } = props;
  if (!show) {
    return null;
  }
  return (
    <div className="modal timeless-staking" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="button">
            <button className="timeless" onClick={() => setShowResults(true)} autoFocus>Timeless Stakes</button>
            <button className="timebased" onClick={() => setShowResults(false)}>TimeBased Stakes</button>
          </div>
        </div>
        <div className="modal-body">
          {showResults ? 
          <form action="#">
          <span>Earn Zinax as you Stake Equity Pools Token here</span>
          <div>
            <label htmlFor="amount">Amount:</label> <br />
            <input type="number" id="amount" placeholder="Amount here" />
          </div>
        </form> 
          : 
          <form action="#">
            <span>Earn Zinax as you Stake Equity Pools Token here</span>
            <div>
              <label htmlFor="amount">Amount:</label> <br />
              <input type="number" id="amount" placeholder="Amount here" />
            </div>
            <div>
              <label htmlFor="token-pair">Duration:</label> <br />
              <input
                type="number"
                id="token-pair"
                placeholder="Duration here"
              />
            </div>
          </form>
          }
        
        </div>
        <div className="modal-footer">
          <button>Stake Now</button>
        </div>
      </div>
    </div>
  );
};

export default TimelessStaking;
