import React, { useEffect } from "react";
import BigNumber from "bignumber.js";
import "./App.css";
import HomePage from "./routes/HomePage/Homepage";
import LaunchApp from "./routes/LaunchPad/Launchpad";
import { Router, Redirect, Switch, Route } from "react-router-dom";
import Pools from "./routes/Pools/Pools";
import Farms from "./routes/Farms/Farms";
import history from "./routerHistory";
import useEagerConnect from './hooks/useEagerConnect';
import { useFetchPriceList, useFetchPublicData } from './state/hooks';
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice';
import ToastListener from './components/ToastListener';
import Navbar from "./common/Navbar/Navbar";

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchPriceList()
  useGetDocumentTitlePrice()

  return (
    <div>
      <Router history={history}>
        <Route path="/"><Redirect to="/pools"/></Route>
        <Route path="/pools"><Pools/></Route>
        <Route path="/farms"><Farms/></Route>
        <ToastListener />
      </Router>
    </div>
  );
}

export default React.memo(App)
