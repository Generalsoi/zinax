import React from "react";
import Navbar from "../../common/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction/introduction";
import DefiForEveryone from "../../components/DefiForEveryone/defiforEveryone";
import AboutUs from "../../components/About/aboutus";
import Roadmap from "../../components/Roadmap/roadmap";
import Features from "../../components/Features/features";
import Tokenomics from "../../components/Tokenomics/tokenomics";
import "./homepage.css";
import Footer from "../../common/Footers/MainFooter/footer";

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
