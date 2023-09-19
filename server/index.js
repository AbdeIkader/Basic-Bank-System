import express from 'express'
import { dbConnection } from './Database/dbConnection.js'
import customerRouter from './src/modules/customer/customer.routes.js'
import transferRouter from './src/modules/transfers/transfer.routes.js'
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

import { globalErrorHandling } from './src/middlewares/globalErrorHandling.js';
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 8000 


app.use(customerRouter)
app.use(transferRouter)
app.use(globalErrorHandling)
dbConnection()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})