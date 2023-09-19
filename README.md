# Basic Banking System

## Overview

Welcome to the Basic Banking System, a simple and dynamic website that enables users to perform basic banking transactions. This web application is designed to simulate a banking environment where users can view customer details, transfer money between customers, and track transfer history.

### Key Features

- **View All Customers**: Explore a list of all customers on the platform.
- **Select and View Customer Details**: Access detailed information about a specific customer.
- **Transfer Money**: Transfer money seamlessly between multiple users.
- **View Transfer History**: Keep track of all transfer transactions made on the platform.

This website aims to provide a user-friendly and hassle-free banking experience, emphasizing the core functionality of money transfers without the complexity of user authentication and registration.

## Technologies Used

The Basic Banking System is built using a combination of front-end and back-end technologies:

- **Front-end**: The user interface is developed using **React.js**, a popular JavaScript library for building dynamic web applications. It also utilizes **React Router** for handling client-side routing, **Axios** for making API requests to the back end, and **Bootstrap** for responsive design.

- **Back-end**: The server-side logic is powered by **Node.js** and **Express.js**, a web application framework. The data is stored in a **MongoDB** database, and the **Mongoose** library is used for data modeling and interaction with the database. **Joi** is employed for data validation.

## API Endpoints

The following API endpoints are available for interaction with the Basic Banking System:

### Customers API

- **POST /api/customers**: Add a new customer to the database.
- **GET /api/customers**: Get a list of all customers.
- **GET /api/customers/:id**: Get details of a specific customer by ID.

### Transfer API

- **POST /api/transfer**: Transfer money between customers.
- **GET /api/transfer**: Get transfer history.

## Getting Started

To run the Basic Banking System on your local machine, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install the necessary dependencies for both the frontend and backend.
4. Configure the MongoDB connection in the backend if necessary.
5. Start the backend server.
6. Start the frontend development server.
7. Access the website in your browser.

Please note that this implementation is primarily for educational purposes and does not include advanced features like user authentication and security measures. It serves as a demonstration of a simple banking system's core functionality.

## Note

Use caution when considering this code for production use. If you plan to deploy it, ensure proper security measures, user authentication, and thorough testing are in place.

Feel free to customize and extend this project to meet your specific requirements. Enjoy exploring the Basic Banking System!
