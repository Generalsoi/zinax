import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import ZINAX_LOGO_URL from '../assets/images/zinax-logo.png';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
    }
  : {
      [ChainId.BSC]: 'https://bsc-dataseed1.defibit.io/',
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.BSC,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        56, // bsc
      ]
    : [
        56, // bsc testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://bsc-dataseed.binance.org/',
  appName: 'Zinax',
  appLogoUrl: ZINAX_LOGO_URL,
});
