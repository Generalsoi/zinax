import React from 'react'
import styled from 'styled-components'
import ApyButton from '../../components/FarmCard/ApyButton'
import { Address, QuoteToken } from '../../../../config/constants/types'
import BigNumber from 'bignumber.js'
import { BASE_ADD_LIQUIDITY_URL } from '../../../../config'
import getLiquidityUrlPathParts from '../../../../utils/getLiquidityUrlPathParts'

export interface AprProps {
  value: number
  multiplier: string
  lpLabel: string
  quoteTokenAdresses: Address
  quoteTokenSymbol: QuoteToken
  tokenAddresses: Address
  zinaxPrice: BigNumber
  originalValue: BigNumber
  hideButton?: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Apr: React.FC<AprProps> = ({
  value,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  zinaxPrice,
  originalValue,
  hideButton = false,
}) => {
  const displayApr = value ? `${value}%` : 'Loading...'
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  return (
    <Container>
      <AprWrapper>{displayApr}</AprWrapper>
      {!hideButton && (
        <ApyButton lpLabel={lpLabel} zinaxPrice={zinaxPrice} apy={originalValue} addLiquidityUrl={addLiquidityUrl} />
      )}
    </Container>
  )
}

export default Apr
