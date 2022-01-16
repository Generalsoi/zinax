import farmsConfig from './farms'

const timebasedFarms = farmsConfig.filter((farm) => farm.isTimebased).map((farm) => farm.tokenSymbol)

export { farmsConfig, timebasedFarms }
export { default as poolsConfig } from './pools'
