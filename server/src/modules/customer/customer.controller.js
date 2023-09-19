import { AppError } from "../../utils/AppError.js";
import { catchAsyncError } from "../../utils/catchAsyncError.js";
import { customerModel } from "./../../../Database/models/customers.js";

const addCustomer = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  let Customer = await customerModel.findOne({ email });
  if (Customer) {
   return next(new AppError("Customer is already exists", 409));
  } else {
    let addCustomer = new customerModel(req.body);
    await addCustomer.save();

    res.status(201).json({ message: "success", addCustomer });
  }
});

const getAllCustomers = catchAsyncError(async (req, res, next) => {
  let getAllCustomers = await customerModel.find({});
  getAllCustomers.length == 0
    ? next(new AppError("No customers found", 404))
    : res.status(200).json({ message: "success", customers: getAllCustomers });
});

const getCustomerById = catchAsyncError(async (req, res, next) => {
  const customerId = req.params.id;
  const customer = await customerModel.findById(customerId);

  if (!customer) {
    return next(new AppError("Customer was not found", 404));
  }

  res.status(200).json({ message: "success", customer });
});

export { addCustomer, getAllCustomers, getCustomerById };
