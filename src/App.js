import "./App.css";
import Navbar from "./common/Navbar";
import { BrowserRouter } from "react-router-dom";
import Introduction from "./components/introduction";
import DefiForEveryone from "./components/defiforEveryone";
import AboutUs from "./components/aboutus";
import Roadmap from "./components/roadmap";
import Features from "./components/features";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Introduction />
        <DefiForEveryone />
        <AboutUs />
        <Roadmap />
        <Features />
      </div>
    </BrowserRouter>
  );
}

export default App;
