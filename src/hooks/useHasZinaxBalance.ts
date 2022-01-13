import BigNumber from 'bignumber.js'
import { getZinaxAddress } from '../utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's ZINAX balance is at least the amount passed in
 */
const useHasZinaxBalance = (minimumBalance: BigNumber) => {
  const zinaxBalance = useTokenBalance(getZinaxAddress())
  return zinaxBalance.gte(minimumBalance)
}

export default useHasZinaxBalance
