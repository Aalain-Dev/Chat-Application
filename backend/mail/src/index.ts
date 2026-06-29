import express from "express";
import dotenv from "dotenv";
import { sendOtpToConsumer } from "./consumer.js";

dotenv.config();

const app = express();

sendOtpToConsumer()
const PORT_VALUE = Number(process.env.PORT)
app.listen(PORT_VALUE, ()=> {
  console.log(`Mail Server Running  is running on the  Port ${PORT_VALUE}`);
});