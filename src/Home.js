import React, { useEffect } from "react";
import { useWeb3Context } from "web3-react";

export default function Home() {
  useEffect(() => {
    context.setFirstValidConnector(["MetaMask", "Infura"]);
  }, []);
  const context = useWeb3Context();

  return (
    <div>
      {console.log("context", context)}
      <h1>{context.account}</h1>
      <button>Hi</button>
    </div>
  );
}
