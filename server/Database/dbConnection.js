import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/BankingSystem")
    .then(() => {
      console.log("DB Connected Succesfully! 💥");
    })
    .catch(() => {
      console.log("DB Failed to Connect ❌");
    });
};
