import { useEffect } from 'react'
import { usePriceCakeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const zinaxPriceUsd = usePriceCakeBusd()
  useEffect(() => {
    document.title = `PancakeSwap - $${Number(zinaxPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
