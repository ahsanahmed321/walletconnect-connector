import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const walletconnect = new WalletConnectConnector({
  rpc: { 4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213" },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});
