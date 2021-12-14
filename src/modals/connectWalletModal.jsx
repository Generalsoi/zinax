import React from "react";
import "../css/connectWalletModal.css";

const ConnectWalletModal = (props) => {
  const { show, setShow } = props;
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5>Connect a wallet</h5>
        </div>
        <div className="modal-body">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
