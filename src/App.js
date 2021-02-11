import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import Web3 from "web3";
import Web3Provider from "web3-react";
import { Connectors } from "web3-react";

const {
  InjectedConnector,
  NetworkOnlyConnector,
  WalletConnectConnector,
} = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });
const Infura = new NetworkOnlyConnector({
  providerURL: "https://rinkeby.infura.io/v3/98ae0677533f424ca639d5abb8ead4e7",
});
const walletconnect = new WalletConnectConnector({
  rpc: { 4: "https://rinkeby.infura.io/v3/98ae0677533f424ca639d5abb8ead4e7" },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});

console.log(walletconnect);

const connectors = { MetaMask, Infura, walletconnect };

function App() {
  return (
    <div className="App">
      <Web3Provider
        connectors={connectors}
        libraryName={"web3.js"}
        web3Api={Web3}
      >
        <Home />
      </Web3Provider>
    </div>
  );
}

export default App;
