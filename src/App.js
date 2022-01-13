import React from "react";
import "./App.css";
import HomePage from "./routes/HomePage/Homepage";
import LaunchApp from "./routes/LaunchPad/Launchpad";
import { Router, Route } from "react-router-dom";
import Pools from "./routes/Pools/Pools";
import Farms from "./routes/Farms";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" page="0" exact element={<HomePage />} />
        <Route path="/launchpad" exact element={<LaunchApp />} />
        <Route path="/pools" exact element={<Pools />} />
        <Route path="/farms" exact element={<Farms />} />
      </Router>
    </div>
  );
}

export default App;
