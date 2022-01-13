import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from '../../hooks/useTheme'
import useAuth from '../../hooks/useAuth'
import { usePriceZinaxBusd } from '../../state/hooks'
import config from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const zinaxPriceUsd = usePriceZinaxBusd()

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      zinaxPriceUsd={zinaxPriceUsd.toNumber()}
      links={config}
      {...props}
    />
  )
}

export default Menu
