import React from "react";
import "./App.css";
import HomePage from "./routes/Homepage";
import LaunchApp from "./routes/Launchpad";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Pools from "./routes/pools";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" page="0" exact element={<HomePage />} />
        <Route path="/launchpad" exact element={<LaunchApp />} />
        <Route path="/pools" exact element={<Pools />} />
      </Routes>
    </div>
  );
}

export default App;
