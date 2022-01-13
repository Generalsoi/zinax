import { useEffect } from 'react'
import { usePriceZinaxBusd } from '../state/hooks'

const useGetDocumentTitlePrice = () => {
  const zinaxPriceUsd = usePriceZinaxBusd()
  useEffect(() => {
    document.title = `Zinax - $${Number(zinaxPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
