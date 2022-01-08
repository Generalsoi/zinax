import React from "react";
import "./connectWalletModal.css";
import Metamusk from "../../assets/images/metamask.png";
import Coinbase from "../../assets/images/coinbase.png";
import Portis from "../../assets/images/portis.png";
import WalletConnect from "../../assets/images/walletconnect.png";
import Trust from "../../assets/images/trust.png";

const ConnectWalletModal = (props) => {
  const { show, setShow } = props;
  if (!show) {
    return null;
  }

  return (
    <div className="modal connectWallet" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5>Connect a wallet</h5>
        </div>
        <div className="modal-body">
          <ul>
            <li>
              <div>
                <img src={Metamusk} alt="metamusk" />
                <a href="">Metamask Wallet</a>
              </div>
            </li>
            <li>
              <div>
                <img src={Coinbase} alt="coinbase" />
                <a href="">Coinbase Wallet</a>
              </div>
            </li>
            <li>
              <div>
                <img src={Portis} alt="portis" />
                <a href="">Portis Wallet</a>
              </div>
            </li>
            <li>
              <div>
                <img src={WalletConnect} alt="wallet-connect" />
                <a href="">Wallet Connect</a>
              </div>
            </li>
            <li>
              <div>
                <img src={Trust} alt="trust" />
                <a href="">Trust Wallet</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
