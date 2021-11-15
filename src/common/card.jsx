import React from "react";
import "../css/card.css";

const Card = (props) => {
  const { cardImg, cardHeading, cardContent } = props;
  return (
    <div className="card">
      <img src={cardImg} alt="cardIcon" />
      <h4>{cardHeading}</h4>
      <p>{cardContent}</p>
    </div>
  );
};

export default Card;
