import METAMASK_ICON_URL from "../assets/images/metamask.png";
import COINBASE_ICON_URL from "../assets/images/coinbase.png";
import TRUSTWALLET_ICON_URL from "../assets/images/trust.png";
import PORTIS_ICON_URL from "../assets/images/portis.png";
import WALLETCONNECT_ICON_URL from "assets/images/walletconnect.png";
import { injected, walletlink } from '../connectors';

export const SUPPORTED_WALLETS = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: METAMASK_ICON_URL,
  },
  COINBASE_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    icon: COINBASE_ICON_URL,
  },
  TRUSTWALLET_LINK: {
    connector: injected,
    name: 'Trust Wallet',
    icon: TRUSTWALLET_ICON_URL,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Wallet Connect',
    icon: WALLETCONNECT_ICON_URL,
  },
};
