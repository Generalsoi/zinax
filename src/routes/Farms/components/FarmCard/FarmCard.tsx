import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { timebasedFarms } from '../../../../config/constants'
import { Farm } from '../../../../state/types'
import { provider as ProviderType } from 'web3-core'
import ExpandableSectionButton from '../../../../components/ExpandableSectionButton'
import { QuoteToken } from '../../../../config/constants/types'
import { BASE_ADD_LIQUIDITY_URL } from '../../../../config'
import getLiquidityUrlPathParts from '../../../../utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
  liquidity?: BigNumber
}

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: #140517;
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 37px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: #140517;
  border-radius: 37px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  zinaxPrice?: BigNumber
  bnbPrice?: BigNumber
  ethPrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, zinaxPrice, bnbPrice, ethPrice, account }) => {

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const isTimebasedFarm = timebasedFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. ZINAX-BNB LP, LINK-BNB LP,
  // NAR-ZINAX LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.ZINAX) {
      return zinaxPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.ETH) {
      return ethPrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, zinaxPrice, ethPrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : 'ZINAX'
  const farmAPY = farm.apy && farm.apy.times(new BigNumber(100)).toNumber().toLocaleString('en-US').slice(0, -1)

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  return (
    <FCard>
      {farm.tokenSymbol === 'ZINAX' && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        isTimebasedFarm={isTimebasedFarm}
        farmImage={farmImage}
        tokenSymbol={farm.tokenSymbol}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{'APR'}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apy ? (
              <>
                <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} zinaxPrice={zinaxPrice} apy={farm.apy} />
                {farmAPY}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>{'Earn'}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={`https://bscscan.com/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
