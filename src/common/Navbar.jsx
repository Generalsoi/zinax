import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import ZinaxLogo from "../assets/images/zinax-logo.png";
import Button from "./button";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [navLinks, setNavLinks] = useState(1);

  useEffect(() => {
    const windSize = window.innerWidth;
    if (windSize <= 800) {
      setNavLinks(0);
    }
  }, []);

  const { page } = props;

  if (page === "0") {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={ZinaxLogo} alt="zinax-logo" />

            <Link to="/" class="nav-logo-img">
              <h3>Zinax</h3>
            </Link>
          </div>

          {navLinks ? (
            <div className={`nav-links-div ${navLinks}`}>
              <ul>
                <li>
                  <Link to="/" className="nav-links">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-links">
                    NFTs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-links">
                    DAO
                  </Link>
                </li>
                <li>
                  <Link to="/pools">
                    <Button buttonStyles="nav-btn" buttonContent="Pools" />
                  </Link>
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
  } else {
    return (
      <header className="header-2">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={ZinaxLogo} alt="zinax-logo" />

            <Link to="/" class="nav-logo-img">
              <h3>Zinax</h3>
            </Link>
          </div>

          {navLinks ? (
            <div className={`nav-links-div ${navLinks}`}>
              <ul>
                <li>
                  <Link to="/farms" className="nav-links">
                    Farms
                  </Link>
                </li>
                <li>
                  <Link to="/pools" className="nav-links">
                    Pools
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-links">
                    Services
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
              </ul>

              <div className="connect-breadcrumbs-div">
                {/* <div className="connect-div">
                  <p>Connect</p>
                  <div className="bsc-div">
                    <p>BSC</p>
                  </div>
                </div> */}
                <Button buttonContent="Connect" buttonStyles="connect-btn" />
              </div>
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
  }
};

export default Navbar;
