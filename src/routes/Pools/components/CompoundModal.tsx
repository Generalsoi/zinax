import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import React, { useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from '../../../components/ModalActions'
import Balance from '../../../components/Balance'
import { getFullDisplayBalance } from '../../../utils/formatBalance'

interface DepositModalProps {
  earnings: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const CompoundModal: React.FC<DepositModalProps> = ({ earnings, onConfirm, onDismiss, tokenName = '' }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(earnings)
  }, [earnings])

  return (
    <Modal
      title={`${'Compound'} ${`${tokenName} Earned`}`}
      onDismiss={onDismiss}
    >
      <BalanceRow>
        <Balance value={Number(fullBalance)} />
      </BalanceRow>
      <ModalActions>
        <Button width="100%" variant="secondary" onClick={onDismiss}>
          {'Cancel'}
        </Button>
        <Button
          id="compound-cake"
          width="100%"
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(fullBalance)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? 'Pending Confirmation' : 'Confirm'}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default CompoundModal

const BalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
