import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TransferHistory() {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    // Send a GET request to fetch the list of transfers from the backend
    axios
      .get('http://localhost:8000/api/transfer')
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data.message === 'success') {
          setTransfers(data.transfers);
        } else {
          console.error('Error fetching transfer history:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error fetching transfer history:', error);
      });
  }, []);

  return (
    <div>
      <h1>Transfer History</h1>
      {transfers.length === 0 ? (
        <p>No transfer history available</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Transfer ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer) => (
              <tr key={transfer._id}>
                <td>{transfer._id}</td>
                <td>{transfer.sender}</td>
                <td>{transfer.receiver}</td>
                <td>${transfer.amount}</td>
                <td>{new Date(transfer.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
