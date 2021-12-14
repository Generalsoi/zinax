import React from "react";
import "../css/button.css";

const Button = (props) => {
  const {
    buttonContent,
    buttonStyles,
    btnSideImg,
    btnSideImgClassName,
    btnSideImgAlt,
  } = props;
  return (
    <div>
      <button className={buttonStyles}>
        {buttonContent}
        <img
          className={btnSideImgClassName}
          src={btnSideImg}
          alt={btnSideImgAlt}
        />
      </button>
    </div>
  );
};

export default Button;
