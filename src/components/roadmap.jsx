import React from "react";
import "../css/roadmap.css";
import RoadMap from "../images/roadmap.svg";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h3>Road Map</h3>
      <div className="roadmap-content">
        <img src={RoadMap} alt="roadmap" />
      </div>
    </section>
  );
};

export default Roadmap;
