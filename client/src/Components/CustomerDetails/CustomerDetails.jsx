import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [transferToEmail, setTransferToEmail] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Send a GET request to fetch the customer details by ID
    axios
      .get(`http://localhost:8000/api/customers/${id}`)
      .then((response) => {
        const { data } = response;
        if (data.message === "success") {
          setCustomer(data.customer);
        } else {
          console.error("Error fetching customer details:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
      });
  }, [id]);

  const handleTransfer = () => {
    // Create a request body with sender (current customer), receiver email, and amount
    const requestBody = {
      sender: customer.email,
      receiver: transferToEmail,
      amount: parseFloat(transferAmount),
    };
  
    console.log(requestBody);
    // Send a POST request to the backend API for money transfer
    axios
      .post("http://localhost:8000/api/transfer", requestBody)
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data.message === "success") {
          setMessage("Transfer successful.");
          setTransferToEmail("");
          setTransferAmount("");
          navigate("/customers");
        } else {
          setMessage("Transfer: " + data.message);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setMessage("Error transferring money: " + error.response.data.error);
        } else {
          console.log(error);
          setMessage("Error transferring money: " + error.message);
        }
      });
  };
  

  return (
    <div>
      {customer ? (
        <div>
          <h1>Customer Details</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{customer._id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>${customer.currentBalance}</td>
              </tr>
            </tbody>
          </table>
          <div className="form-group">
            <label htmlFor="transferToEmail">Transfer To (Email):</label>
            <input
              type="text"
              className="form-control"
              id="transferToEmail"
              value={transferToEmail}
              onChange={(e) => setTransferToEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="transferAmount">Transfer Amount:</label>
            <input
              type="number"
              className="form-control"
              id="transferAmount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleTransfer}
          >
            Transfer Money
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
}
