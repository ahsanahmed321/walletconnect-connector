import React from "react";

import { useWeb3React } from "@web3-react/core";
import { walletconnect } from "./Connectors";

export default function Home() {
  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const connectWalletButton = () => {
    activate(walletconnect);
    console.log("Current context", context);
  };

  const killWalletSession = () => {
    console.log("connector", connector);
    connector.close();
  };

  const deactivateWallet = () => {
    deactivate();
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={connectWalletButton}> Hi</button>
      <button onClick={deactivateWallet}>please mujhe chordo</button>
      <button onClick={killWalletSession}>ahhhh</button>
    </div>
  );
}
