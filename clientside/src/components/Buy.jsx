// Buy.js
import React, { useState } from "react";
import Web3 from "web3";

const Buy = ({ show, onClose, title, description }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [price] = useState((Math.random() * 100).toFixed(2)); // Random price between 0 and 100

  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

  const handleMetaMaskConnect = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        setWeb3(web3Instance);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      alert("MetaMask not installed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission based on the selected method
    if (paymentMethod === "creditCard") {
      console.log("Processing credit card payment");
    } else if (paymentMethod === "upi") {
      console.log("Processing UPI payment");
    } else if (paymentMethod === "crypto" && web3 && account) {
      console.log(`Processing crypto payment with MetaMask from ${account}`);
      // Implement crypto payment logic here
    } else {
      console.log("Please select a payment method");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <p className="text-lg font-bold mb-4 text-gray-700">Price: ${price}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Select Payment Method:
            </label>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Credit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">UPI</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="crypto"
                  checked={paymentMethod === "crypto"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">Crypto (MetaMask)</span>
              </label>
            </div>
          </div>
          {paymentMethod === "crypto" && !account && (
            <button
              type="button"
              onClick={handleMetaMaskConnect}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Connect MetaMask
            </button>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors mb-4"
          >
            Complete Purchase
          </button>
        </form>
        <button
          onClick={onClose}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Buy;
