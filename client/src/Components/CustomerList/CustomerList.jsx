import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Send a GET request to fetch the list of customers from the backend
    axios
      .get("http://localhost:8000/api/customers")
      .then((response) => {
        const { data } = response;
        if (data.error) {
          setError(data.error); // Set error message here
        } else {
          setCustomers(data.customers);
        }
      })
      .catch((error) => {
        setError("No Customers found"); // Set error message here
      });
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      {error ? (
        <p>{error}</p> // Display the error message
      ) : (
         (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer._id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>${customer.currentBalance}</td>
                  <td>
                    <Link
                      to={`/customer/${customer._id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
}
