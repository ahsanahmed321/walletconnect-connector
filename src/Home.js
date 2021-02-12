import React from "react";

import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { useWeb3React } from '@web3-react/core'
export default function Home() {

  const walletconnect = new WalletConnectConnector({
    rpc: { 4: "https://kovan.infura.io/v3/98ae0677533f424ca639d5abb8ead4e7" },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: 12000,
  });
  
    const web3React = useWeb3React()
    console.log(web3React)
    web3React.activate(walletconnect)
  
  

  return (
    <div>
      
      <h1>Hello</h1>
      <button>Hi</button>
    </div>
  );
}
