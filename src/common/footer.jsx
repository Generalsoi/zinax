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
      <div className="footer-content">
        <div>
          <h6>ZINARI FINANCE</h6>
          <p>© 2021</p>
          <a href="#">
            <p>Privacy-Terms</p>
          </a>
        </div>
        <div>
          <h6>Products</h6>
          <a href="#">
            <p>Zinax.org</p>
          </a>
          <a href="#">
            <p>Zinaricoin.com</p>
          </a>
        </div>
        <div>
          <h6>Community</h6>
          <a href="#">
            <p>Fixgang</p>
          </a>
          <a href="#">
            <p>Help (Gitbook)</p>
          </a>
        </div>
        <div>
          <h6>About</h6>
          <a href="#">
            <p>Learn More</p>
          </a>
          <a href="#">
            <p>Presale</p>
          </a>
        </div>
      </div>
      <h5>Stay Connected to Zinax</h5>
      <div className="footer-links-div">
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
