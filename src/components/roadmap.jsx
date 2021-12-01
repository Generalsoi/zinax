import React from "react";
import "../css/roadmap.css";
import PurpleSemicircle from "../images/semicircle-purple.png";
import YellowSemicircle from "../images/semicircle-yellow.png";
import SmallCircle from "../images/smallcircle.png";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h3>Road Map</h3>
      <div className="roadmap-content">
        <div className="roadmap-content-div">
          <img
            className="roadmap-ellipse-one"
            src={PurpleSemicircle}
            alt="purple-semicircle"
          />
          <img className="smallcircle" src={SmallCircle} alt="small-circle" />
          <div className="quarter-div">
            <div className="quarter odd">
              <p>Q3 21</p>
            </div>
          </div>
          <p className="quarter-p">
            Ecosystem building, Farming and staking pools
          </p>
          <img
            className="smallcircle-two"
            src={SmallCircle}
            alt="small-circle"
          />
        </div>
        <div className="roadmap-content-div">
          <img
            className="roadmap-ellipse-two"
            src={YellowSemicircle}
            alt="yellow-semicircle"
          />

          <p className="quarter-p">IDO, Project, CEX listing commences</p>
          <div className="quarter-div">
            <div className="quarter even">
              <p>Q1 22</p>
            </div>
          </div>
        </div>
        <div className="roadmap-content-div">
          <img
            className="roadmap-ellipse-one"
            src={PurpleSemicircle}
            alt="purple-semicircle"
          />
          <img className="smallcircle" src={SmallCircle} alt="small-circle" />
          <div className="quarter-div">
            <div className="quarter odd">
              <p>Q2 22</p>
            </div>
          </div>
          <p className="quarter-p">
            $100 million, worth of transaction volume on Zinax.
          </p>
          <img
            className="smallcircle-two"
            src={SmallCircle}
            alt="small-circle"
          />
        </div>
        <div className="roadmap-content-div">
          <img
            className="roadmap-ellipse-two"
            src={YellowSemicircle}
            alt="yellow-semicircle"
          />
          <p className="quarter-p">
            40,000 holders, 200,000 users, transaction worth $400 million on
            Zinax
          </p>
          <div className="quarter-div">
            <div className="quarter even">
              <p>Q3 22</p>
            </div>
          </div>
          <img
            className="smallcircle-one"
            src={SmallCircle}
            alt="small-circle"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
