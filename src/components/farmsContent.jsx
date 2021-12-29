import React, { useState } from "react";
import "../css/farmsContent.css";
import List from "../assets/images/List.png";
import Menu from "../assets/images/Menu.png";
import ZinaxLogo from "../assets/images/zinax-logo.png";
import BinanceLogo from "../assets/images/binance-logo.png";
import FarmsCard from "./../common/farmsCard";
import FarmsAccordion from "./../common/farmsAccordion";
import TimelessStaking from "./../modals/timelessStakingModal";
import TimeBasedStake from "./../modals/timeBasedStakingModal";

const FarmsContent = () => {
  const [viewState, setViewState] = useState(1);
  const [show, setShow] = useState(false);

  const dummyData = [
    {
      tokenNames: "ZINAX-BNB",
      tokenImg1: ZinaxLogo,
      tokenImg2: BinanceLogo,
      multiplier: "40X",
      aprValue: "2.72%",
      earnedValue: "120",
      liquidityValue: "$780,344",
    },
    {
      tokenNames: "BUSD-BNB",
      tokenImg1: ZinaxLogo,
      tokenImg2: BinanceLogo,
      multiplier: "50X",
      aprValue: "2.95%",
      earnedValue: "145",
      liquidityValue: "$980,354",
    },
    {
      tokenNames: "ZINAX-USDT",
      tokenImg1: ZinaxLogo,
      tokenImg2: BinanceLogo,
      multiplier: "60X",
      aprValue: "4.72%",
      earnedValue: "198",
      liquidityValue: "$990,433",
    },
    {
      tokenNames: "ZINAX-BUSD",
      tokenImg1: ZinaxLogo,
      tokenImg2: BinanceLogo,
      multiplier: "65X",
      aprValue: "4.76%",
      earnedValue: "198",
      liquidityValue: "$99,433",
    },
  ];

  const stakeType = dummyData.stakeType;
  console.log(stakeType);

  return (
    <div className="farms-content">
      <div className="farms-header-content">
        <div className="farms-header-content-details">
          <div className="live-or-finished-farms">
            <div>
              <p>Live</p>
            </div>
            <div>
              <p>Finished</p>
            </div>
          </div>
          <span>
            <p>Earn Zinax as you Stake Liquidity Pool Tokens here</p>
          </span>
          <div>
            <img
              src={List}
              alt="list"
              onClick={() => {
                setViewState(0);
              }}
            />
            <img
              src={Menu}
              alt="menu"
              onClick={() => {
                setViewState(1);
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={`farms-body ${
          viewState ? "farms-card-view" : "farms-accordion-view"
        }`}
      >
        {
          viewState
            ? dummyData.map((data) => (
                <FarmsCard
                  key={data.tokenNames}
                  tokenNames={data.tokenNames}
                  tokenImg1={data.tokenImg1}
                  tokenImg2={data.tokenImg2}
                  multiplier={data.multiplier}
                  aprValue={data.aprValue}
                  earnedValue={data.earnedValue}
                  liquidityValue={data.liquidityValue}
                  stakeType={data.stakeType}
                  setShow={setShow}
                />
              ))
            : // <PoolsCard
              //   tokenNames="ZINAX-BNB"
              //   tokenImg1={ZinaxLogo}
              //   tokenImg2={BinanceLogo}
              //   multiplier="40X"
              //   aprValue="2.72%"
              //   earnedValue="120"
              //   liquidityValue="$780,344"
              // />

              dummyData.map((data) => (
                <FarmsAccordion
                  key={data.tokenNames}
                  tokenNames={data.tokenNames}
                  tokenImg1={data.tokenImg1}
                  tokenImg2={data.tokenImg2}
                  multiplier={data.multiplier}
                  aprValue={data.aprValue}
                  earnedValue={data.earnedValue}
                  liquidityValue={data.liquidityValue}
                />
              ))

          // <PoolsAccordion
          //   tokenNames="ZINAX-BNB"
          //   tokenImg1={ZinaxLogo}
          //   tokenImg2={BinanceLogo}
          //   multiplier="40X"
          //   aprValue="2.72%"
          //   earnedValue="120"
          //   liquidityValue="$780,344"
          // />
        }
      </div>
      {stakeType === "timebased-stake" ? (
        <TimeBasedStake show={show} setShow={setShow} />
      ) : (
        <TimelessStaking show={show} setShow={setShow} />
      )}
    </div>
  );
};

export default FarmsContent;
