import React from "react";
import Navbar from "../common/Navbar";
import Introduction from "../components/introduction";
import DefiForEveryone from "../components/defiforEveryone";
import AboutUs from "../components/aboutus";
import Roadmap from "../components/roadmap";
import Features from "../components/features";
import Tokenomics from "../components/tokenomics";
import Footer from "../common/footer";
import "../css/homepage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar page="0" />
      <Introduction />
      <DefiForEveryone />
      <AboutUs />
      <Roadmap />
      <Features />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default HomePage;
