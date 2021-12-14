import React from "react";
import "../css/button.css";

const Button = (props) => {
  const { buttonContent, buttonStyles, btnSideImg, btnSideImgClassName } =
    props;
  return (
    <div>
      <button className={buttonStyles}>
        {buttonContent}
        <img className={btnSideImgClassName} src={btnSideImg} alt="connect" />
      </button>
    </div>
  );
};

export default Button;
