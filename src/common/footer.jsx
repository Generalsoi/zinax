import React from "react";
import MediumIcon from "../images/medium.png";
import TelegramIcon from "../images/telegram.png";
import TwitterIcon from "../images/twitter.png";
import GithubIcon from "../images/github.png";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <h5>Stay Connected to Zinax</h5>
      <div>
        <Link to="" className="footer-links">
          <img src={MediumIcon} alt="medium-icon" />
        </Link>
        <Link to="" className="footer-links">
          <img src={TwitterIcon} alt="twitter-icon" />
        </Link>
        <Link to="" className="footer-links">
          <img src={TelegramIcon} alt="telegram-icon" />
        </Link>
        <Link to="" className="footer-links">
          <img src={GithubIcon} alt="github-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
