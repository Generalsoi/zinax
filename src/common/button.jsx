import React from "react";
import "../css/button.css";

const Button = (props) => {
  const { buttonContent, buttonStyles } = props;
  return (
    <div>
      <button className={buttonStyles}>{buttonContent}</button>
    </div>
  );
};

export default Button;
