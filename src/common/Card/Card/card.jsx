import React from "react";
import "./card.css";
import Button from "../../Button/button";

const Card = (props) => {
  const { cardImg, cardHeading, cardContent } = props;
  return (
    <div className="card">
      <div className="image-div-div">
        <div className="image-div">
          <img src={cardImg} alt="cardIcon" />
        </div>
      </div>

      <Button buttonContent={cardHeading} buttonStyles="cardBtn" />
      <p>{cardContent}</p>
    </div>
  );
};

export default Card;
