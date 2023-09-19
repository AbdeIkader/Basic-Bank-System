import express from "express";
import {
  getTransferHistory,
  transferController,
} from "./transfer.controller.js";
import { transferValidation } from "./transfer.validation.js";
import { validate } from "./../../middlewares/validate.js";

const transferRouter = express.Router();

transferRouter
  .route("/api/transfer")
  .post(validate(transferValidation), transferController)
  .get(getTransferHistory);

export default transferRouter;
