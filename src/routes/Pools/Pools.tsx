import React, { useState, useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
import PoolsIntroduction from "./poolsIntroduction";
import PoolsContent from "./poolsContent";
import PoolsAndFarmsFooter from "./poolsFarmsFooter";

const Farm: React.FC = () => {
  
  return (
    <div className="pools">
    <PoolsIntroduction />
    <PoolsContent/>
    <PoolsAndFarmsFooter/>
    </div>
  )
}

export default Farm
