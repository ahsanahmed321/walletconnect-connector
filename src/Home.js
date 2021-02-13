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
    console.log(context.active)
    if(context.active){
    connector.close();
    }
  };

  const deactivateWallet = () => {
    console.log("Current context", context);
    if(context.active){
    deactivate();
    }
  };

  return (
    <div>
      <h1>{context.account}</h1>
  <h1>{context.chainId}</h1>
      <button onClick={connectWalletButton}> Hi</button>
      <button onClick={deactivateWallet}>please mujhe chordo</button>
      <button onClick={killWalletSession}>ahhhh</button>
    </div>
  );
}
