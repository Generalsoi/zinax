import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const ZINAX_PER_BLOCK = new BigNumber(0.3)
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const BSC_BLOCK_TIME = 3
export const ZINAX_POOL_PID = 1
export const BASE_EXCHANGE_URL = 'https://exchange.pancakeswap.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const DEFAULT_TOKEN_DECIMAL = 18
export const DEFAULT_GAS_LIMIT = 200000
export const DEFAULT_GAS_PRICE = 5
export const DEFAULT_REF_ADDRESS = 0x0000000000000000000000000000000000000000

