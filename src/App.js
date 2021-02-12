import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import Web3 from "web3";
import Web3Provider from "web3-react";
import { Web3ReactProvider } from '@web3-react/core'

function getLibrary() {
 let web3 = new Web3("https://rinkeby.infura.io/v3/98ae0677533f424ca639d5abb8ead4e7")
  return new Web3Provider(web3) // this will vary according to whether you use e.g. ethers or web3.js
}


function App() {
  return (
    <div className="App">
<Web3ReactProvider getLibrary={getLibrary}>
      <Home/>
    </Web3ReactProvider>
    </div>
  );
}

export default App;
