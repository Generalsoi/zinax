import React from "react";
import "../css/card.css";
import Button from "./button";

const Card = (props) => {
  const { cardImg, cardHeading, cardContent } = props;
  return (
    <div className="card">
      <div className="image-div">
        <img src={cardImg} alt="cardIcon" />
      </div>
      <Button buttonContent={cardHeading} buttonStyles="cardBtn" />
      <p>{cardContent}</p>
    </div>
  );
};

export default Card;
