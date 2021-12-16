import React from "react";
import "../css/timelessStakingModal.css";

const TimelessStaking = (props) => {
  const { show, setShow } = props;
  if (!show) {
    return null;
  }

  return (
    <div className="modal timeless-staking" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">Stake LP tokens</div>
        <div className="modal-body">
          <form action="">
            <div>
              <label htmlFor="token-pair">Token Pair:</label> <br />
              <input
                type="text"
                id="token-pair"
                placeholder="Type the name here"
              />
            </div>

            <div>
              <label htmlFor="amount">Amount:</label> <br />
              <input type="text" id="amount" placeholder="Amount here" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button>Stake Now</button>
        </div>
      </div>
    </div>
  );
};

export default TimelessStaking;
