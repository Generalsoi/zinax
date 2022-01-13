import React from 'react'
import styled from 'styled-components'
import { HelpIcon } from '@pancakeswap-libs/uikit'

import Tooltip from '../Tooltip/Tooltip'

export interface MultiplierProps {
  multiplier: string
}

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: right;

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 0;
    }
  }
`

const Multiplier: React.FunctionComponent<MultiplierProps> = ({ multiplier }) => {
  const displayMultipler = multiplier ? multiplier.toLowerCase() : '-'

  return (
    <Container>
      <MultiplierWrapper>{displayMultipler}</MultiplierWrapper>
      <Tooltip
        content={
          <div>
            {'The multiplier represents the amount of ZINAX rewards each farm gets.'}
            <br />
            <br />
            {
              'For example, if a 1x farm was getting 0.00075 ZINAX per block, a 40x farm would be getting 0.3 ZINAX per block.'}
          </div>
        }
      >
        <HelpIcon color="textSubtle" />
      </Tooltip>
    </Container>
  )
}

export default Multiplier
