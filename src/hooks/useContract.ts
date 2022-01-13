import { useMemo } from 'react'
import useWeb3 from '../hooks/useWeb3'
import {
  getBep20Contract,
  getZinaxContract,
  getMasterchefContract,
  getSouschefContract,
} from '../utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useZinax = () => {
  const web3 = useWeb3()
  return useMemo(() => getZinaxContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useSousChef = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSouschefContract(id, web3), [id, web3])
}
