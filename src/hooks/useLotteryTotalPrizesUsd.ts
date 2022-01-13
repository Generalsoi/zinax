import { usePriceCakeBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const zinaxPriceBusd = usePriceCakeBusd()

  return totalCake * zinaxPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
