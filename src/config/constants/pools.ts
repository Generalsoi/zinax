import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'ZINAX',
    stakingTokenName: QuoteToken.ZINAX,
    stakingTokenAddress: '0xA973F2ec4Ab693bB0b3a68279C9D9832e207d886',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x9BC5e26bee164955992320d6cB2e1792c9e42473',
    },
    poolCategory: PoolCategory.TIMELESS,
    projectLink: 'https://zinax.app/',
    harvest: true,
    tokenPerBlock: '0.075',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
]

export default pools
