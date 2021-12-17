import React from "react";
import "../css/timeBasedStakingModal.css";

const TimeBasedStake = (props) => {
  const { show, setShow } = props;
  if (!show) {
    return null;
  }
  return (
    <div className="modal timebased-stake" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">Time Based</div>
      </div>
    </div>
  );
};

export default TimeBasedStake;
