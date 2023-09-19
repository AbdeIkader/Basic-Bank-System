import React from "react";
import bankImage from "../../assets/images/bank4.avif";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const handleViewCustomers = () => {
    // Navigate to the CustomersList component
    navigate("/customers");
  };

  const handleTransferHistory = () => {
    // Navigate to the TransferHistory component
    navigate("/history");
  };

  return (
    <div className="container">
      <div className="row  mt-5">
        <h1 className="mb-5">Welcome to Spark Bank</h1>
        <div className="col-md-6">
          <img
            src={bankImage}
            alt="Bank"
            className="img-fluid"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-6 mt-4">
          <p className="fs-5">
            Welcome to Spark Foundation Bank, where we offer a range of
            convenient and secure banking services to meet your financial needs.
            Whether you're looking to view all customers, select and view one
            customer's details, transfer money seamlessly, or check out our list
            of customers, we've got you covered. Our mission is to provide you
            with a hassle-free banking experience, and our user-friendly
            interface makes managing your finances a breeze. At Spark Foundation
            Bank, your financial convenience is our top priority.
          </p>

          <div className="text-center mt-4">
            <p className="fs-5">Choose an Action:</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mx-2"
                onClick={handleViewCustomers}
              >
                View all Customers
              </button>
              <button
                className="btn btn-success mx-2"
                onClick={handleTransferHistory}
              >
                Transfer History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
