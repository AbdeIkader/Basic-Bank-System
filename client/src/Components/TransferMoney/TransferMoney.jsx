import React, { useState } from "react";
import axios from "axios";

export default function TransferMoney() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = () => {
    // Create a request body with sender, receiver, and amount
    const requestBody = {
      sender,
      receiver,
      amount: parseFloat(amount), // Convert amount to a floating-point number
    };

    // Send a POST request to the backend API
    axios
      .post("http://localhost:8000/api/transfer", requestBody)
      .then((response) => {
        const { data } = response;
        if (data.message === "success") {
          setMessage("Transfer successful.");
          // Clear the form fields after successful transfer
          setSender("");
          setReceiver("");
          setAmount("");
        } else {
          setMessage("Transfer failed: " + data.message);
        }
      })
      .catch((error) => {
        setMessage("Error transferring money: " + error.message);
      });
  };

  return (
    <div>
      <h1>Transfer Money</h1>
      <form>
        <div className="form-group">
          <label htmlFor="sender">Sender:</label>
          <input
            type="text"
            className="form-control"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiver">Receiver:</label>
          <input
            type="text"
            className="form-control"
            id="receiver"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleTransfer}
        >
          Transfer Money
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
