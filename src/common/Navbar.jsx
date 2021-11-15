import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import ZinaxLogo from "../images/zinax-logo.png";
import Button from "./button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(1);

  useEffect(() => {
    const windSize = window.innerWidth;
    if (windSize <= 800) {
      setNavLinks(0);
    }
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={ZinaxLogo} alt="zinax-logo" />
          <h3>Zinax</h3>
        </div>

        {navLinks ? (
          <div className={`nav-links-div ${navLinks}`}>
            <ul>
              <li>
                <Link to="" className="nav-links">
                  Features
                </Link>
              </li>
              <li>
                <Link to="" className="nav-links">
                  NFTs
                </Link>
              </li>
              <li>
                <Link to="" className="nav-links">
                  DAO
                </Link>
              </li>
              <li>
                <Button buttonStyles="nav-btn" buttonContent="Pools" />
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div
          className="menubar"
          onClick={() => {
            if (navLinks === 0) {
              setNavLinks(1);
            } else {
              setNavLinks(0);
            }
          }}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </nav>
      {/* {navLinks ? <div>Hello</div> : ""} */}
    </header>
  );
};

export default Navbar;