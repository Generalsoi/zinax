import React from "react";
import "./App.css";
import HomePage from "./routes/HomePage/Homepage";
import LaunchApp from "./routes/LaunchPad/Launchpad";
import { Routes, Route } from "react-router-dom";
import Pools from "./routes/Pools/pools";
import Farms from "./routes/Farms/farms";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" page="0" exact element={<HomePage />} />
        <Route path="/launchpad" exact element={<LaunchApp />} />
        <Route path="/pools" exact element={<Pools />} />
        <Route path="/farms" exact element={<Farms />} />
      </Routes>
    </div>
  );
}

export default App;
