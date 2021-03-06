import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from '../utils/web3'
import { poolsConfig } from '../config/constants'
import { PoolCategory } from '../config/constants/types'

// Addresses
import {
  getAddress,
  getZinaxAddress,
  getMasterChefAddress,
} from '../utils/addressHelpers'

// ABI

import bep20Abi from '../config/abi/erc20.json'
import zinaxAbi from '../config/abi/zinax.json'
import masterChef from '../config/abi/masterchef.json'
import sousChef from '../config/abi/sousChef.json'
import sousChefBnb from '../config/abi/sousChefBnb.json'

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}


export const getSouschefContract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), web3)
}

export const getZinaxContract = (web3?: Web3) => {
  return getContract(zinaxAbi, getZinaxAddress(), web3)
}

export const getMasterchefContract = (web3?: Web3) => {
  return getContract(masterChef, getMasterChefAddress(), web3)
}

