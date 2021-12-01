import React from "react";
import "../css/roadmap.css";
import RoadMap from "../images/roadmap.svg";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h3>Road Map</h3>
      <div className="roadmap-content">
        <div className="roadmap-content-div first-roadmap-div">
          <div className="quarter-div">
            <div className="quarter odd">
              <p>Q3 21</p>
            </div>
          </div>
          <p className="quarter-p">
            Ecosystem building, Farming and staking pools
          </p>
        </div>
        <div className="roadmap-content-div second-roadmap-div">
          <p className="quarter-p">IDO, Project, CEX listing commences</p>
          <div className="quarter-div">
            <div className="quarter even">
              <p>Q1 22</p>
            </div>
          </div>
        </div>
        <div className="roadmap-content-div third-roadmap-div">
          <div className="quarter-div">
            <div className="quarter odd">
              <p>Q2 22</p>
            </div>
          </div>
          <p className="quarter-p">
            $100 million, worth of transaction volume on Zinax.
          </p>
        </div>
        <div className="roadmap-content-div last-roadmap-div">
          <p className="quarter-p">
            40,000 holders, 200,000 users, transaction worth $400 million on
            Zinax
          </p>
          <div className="quarter-div">
            <div className="quarter even">
              <p>Q3 22</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
