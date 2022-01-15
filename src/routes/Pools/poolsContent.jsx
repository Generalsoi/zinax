import React, { useState, useMemo } from "react";
import "./poolsContent.css";
import styled from "styled-components";
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useBlock from '../../hooks/useBlock'
import { usePools } from '../../state/hooks'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'

const PoolsContent = () => {
  const { path } = useRouteMatch()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const block = useBlock()
  const [stackedOnly, setStackedOnly] = useState(false)

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || block > pool.endBlock),
    [block, pools],
  )
  const stackedOnlyPools = useMemo(
    () => openPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [openPools],
  )


  return (
    <div className="pools-content">
      <div className="pools-header-content">
        <div className="pools-header-content-details">
          <div className="live-or-finished-pools">
            <p><PoolTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} /></p>
          </div>
        </div>
      </div>
      <div className="pools-body">
        <div className="pools-card-view">
            <Route exact path={`${path}`}>
              <>
              {stackedOnly
                ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)
                : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)}
              </>
            </Route>
            <Route path={`${path}/history`}>
              {orderBy(finishedPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
              ))}
            </Route>
        </div>
      </div> 
    </div>
      
        
  );
};

export default PoolsContent;



        
