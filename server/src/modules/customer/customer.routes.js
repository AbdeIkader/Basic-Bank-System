import express from "express";
import {
  addCustomer,
  getAllCustomers,
  getCustomerById,
} from "./customer.controller.js";
import { customerValidation } from "./customer.validation.js";
import { validate } from "./../../middlewares/validate.js";

const customerRouter = express.Router();

customerRouter.post("/", validate(customerValidation), addCustomer);
customerRouter.get("/api/customers", getAllCustomers);
customerRouter.get("/api/customers/:id", getCustomerById);

export default customerRouter;
