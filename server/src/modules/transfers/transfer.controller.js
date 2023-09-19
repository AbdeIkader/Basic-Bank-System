import { customerModel } from "../../../Database/models/customers.js";
import { transferModel } from "../../../Database/models/transfer.js";
import { AppError } from "../../utils/AppError.js";
import { catchAsyncError } from "../../utils/catchAsyncError.js";

const transferController = catchAsyncError(async (req, res, next) => {
  const { sender, receiver, amount } = req.body;

  console.log(req.body);
  if (amount <= 0) {
    return next(new AppError("Amount must be a positive value", 400));
  }

  let senderCustomer = await customerModel.findOne({ email: sender });
  let receiverCustomer = await customerModel.findOne({ email: receiver });

  // console.log(senderCustomer);
  // console.log(receiverCustomer);

  if (!senderCustomer || !receiverCustomer) {
    return next(new AppError("Sender or receiver not found", 404));
  }

  // Check if sender and receiver are the same
  if (sender === receiver) {
    return next(new AppError("Sender and receiver cannot be the same", 400));
  }

  // Check if the sender's balance is sufficient for the transfer
  if (senderCustomer.currentBalance < amount) {
    return next(new AppError("Balance is too low", 400));

  }

  // Ensure that the sender's balance doesn't go below zero
  if (senderCustomer.currentBalance - amount < 0) {
    return next(new AppError("Balance cannot go below zero", 400));
  }

  senderCustomer.currentBalance -= amount;
  receiverCustomer.currentBalance += amount;

  const transfer = new transferModel({
    sender: senderCustomer.email,
    receiver: receiver,
    amount,
  });

  await Promise.all([
    senderCustomer.save(),
    receiverCustomer.save(),
    transfer.save(),
  ]);
  console.log("Sender:", sender);
  console.log("Receiver Email:", receiver);

  res.status(200).json({ message: "success", transfer });
});

const getTransferHistory = catchAsyncError(async (req, res, next) => {
  const transferHistory = await transferModel.find({}).sort({ date: -1 });
  res.status(200).json({ message: "success", transfers: transferHistory });
});

export { transferController, getTransferHistory };
