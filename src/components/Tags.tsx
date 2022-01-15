import React from 'react'
import { Tag, VerifiedIcon } from '@pancakeswap-libs/uikit'

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />} {...props}>
    Timeless
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<VerifiedIcon />} {...props}>
    Time-based
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<VerifiedIcon />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag }
