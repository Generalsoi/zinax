import React from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from '../../components/FarmCard/FarmCard'
import { timebasedFarms } from '../../../../config/constants'
import { CommunityTag, CoreTag, DualTag, TimebasedTag, TimelessTag } from '../../../../components/Tags'

const StyledCommunityTag = styled(CommunityTag)`
  height: 24px;
  padding: 0 6px;
  svg {
    width: 14px;
  }
`

const StyledCoreTag = styled(CoreTag)`
  height: 24px;
  padding: 0 6px;

  svg {
    width: 14px;
  }
`

const StyledDualTag = styled(DualTag)`
  height: 24px;
  padding: 0 6px;
  margin-left: 4px;

  svg {
    width: 14px;
  }
`
const StyledTimebasedTag = styled(TimebasedTag)`
  height: 24px;
  padding: 0 6px;

  svg {
    width: 14px;
  }
`
const StyledTimelessTag = styled(TimelessTag)`
  height: 24px;
  padding: 0 6px;

  svg {
    width: 14px;
  }
`

const Tags: React.FunctionComponent<FarmWithStakedValue> = ({ tokenSymbol, dual }) => {
  const isTimebasedFarm = timebasedFarms.includes(tokenSymbol)

  return (
    <>
      {isTimebasedFarm ? <StyledTimebasedTag /> : <StyledTimelessTag />}
      {dual && <StyledDualTag />}
    </>
  )
}

export default Tags
