import React from "react";

export default function ContactUs() {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or feedback, please feel free to contact us.
      </p>

      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h2>Contact Information</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Address:</strong> Alex Matrouh Desert Rd., Agami,
              Alexandria Inside Agami Star Mall, Gate 8 , Ground Floor. away.
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> abdelrahmanabdelkader2002@gmail.com
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> +01277545615
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
