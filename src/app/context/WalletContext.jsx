"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Web3 } from "web3";
import { ethers } from "ethers";
import { contractAbi } from "../utils/constants";

// Create a context with a default value
const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

const contractAddress = "0x55E1E16F10A3701FBC6EBbc952DdAAe4f5F8840c";

// Custom hook to use the WalletProvider
export const WalletProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(null);

  const { ethereum } = typeof window !== "undefined" ? window : {};

  const checkIfWalletIsConnected = useCallback(
    async function checkIfWalletIsConnected() {
      try {
        if (!ethereum) return alert("Please install wallet software");

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [{ eth_accounts: {} }],
        });

        if (accounts.length) {
          setAccounts(accounts[0]);
        } else {
          console.log("No account found!");
        }
      } catch (error) {}
    },
    [ethereum]
  );

  async function onClickPay(nftJson, nftImage, price) {
    if (!ethereum) return;

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const parsedAmount = ethers.parseEther(price.toString());

    try {
      const transaction = await contract.payPackage(nftJson, nftImage, {
        value: ethers.toBeHex(parsedAmount),
      });

      console.log("Transaction to be executed: ", transaction);
    } catch (error) {
      console.error("Transaction failed: ", error);
    }
  }

  const getEthereumContract = (address) => {
    const w3 = new Web3(window.ethereum);
    const contract = new w3.eth.Contract(contractAbi, address);
    return contract;
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  useEffect(() => {
    async function test() {
      const senderContract = getEthereumContract(contractAddress);
      const owners = await senderContract.methods.getMyVouchers().call();
      const vouchers = await senderContract.methods.getAllVouchers().call();

      console.log(owners, "OWNERS");
      console.log(vouchers, "VOUCHER");
    }
    test();
  }, []);

  return (
    <WalletContext.Provider value={{ accounts, onClickPay }}>
      {children}
    </WalletContext.Provider>
  );
};
