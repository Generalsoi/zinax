import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Toggle, Text } from '@pancakeswap-libs/uikit'

const PoolTabButtons = ({ stackedOnly, setStackedOnly }) => {
  const { url, isExact } = useRouteMatch()

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stackedOnly} onChange={() => setStackedOnly(!stackedOnly)} />
        <Text><StyledText>{'Staked only'}</StyledText></Text>
      </ToggleWrapper>
      <ButtonWrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {'Live'}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {'Finished'}
        </ButtonMenuItem>
      </ButtonMenu>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default PoolTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`
const ButtonWrapper = styled.div`
  margin-left: 700px;
`
const StyledText = styled.div`
  font-weight: 500;
  color: #FBE200;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
