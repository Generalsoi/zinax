import "./App.css";
import Navbar from "./common/Navbar";
import { BrowserRouter } from "react-router-dom";
import Introduction from "./components/introduction";
import DefiForEveryone from "./components/defiforEveryone";
import AboutUs from "./components/aboutus";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Introduction />
        <DefiForEveryone />
        <AboutUs />
      </div>
    </BrowserRouter>
  );
}

export default App;
