import React from "react";
import "../css/button.css";
import ConnectWalletModal from "../modals/connectWalletModal";

const Button = (props) => {
  const {
    buttonContent,
    buttonStyles,
    btnSideImg,
    btnSideImgClassName,
    btnSideImgAlt,
    setShow,
  } = props;
  console.log(setShow);
  return (
    <React.Fragment>
      <div>
        <button className={buttonStyles} onClick={() => setShow(true)}>
          {buttonContent}
          <img
            className={btnSideImgClassName}
            src={btnSideImg}
            alt={btnSideImgAlt}
          />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Button;
