import BigNumber from 'bignumber.js'
import { getCakeAddress } from '../utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's ZINAX balance is at least the amount passed in
 */
const useHasCakeBalance = (minimumBalance: BigNumber) => {
  const zinaxBalance = useTokenBalance(getCakeAddress())
  return zinaxBalance.gte(minimumBalance)
}

export default useHasCakeBalance
