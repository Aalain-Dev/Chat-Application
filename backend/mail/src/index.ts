import express from "express";
import dotenv from "dotenv";
import { sendOtpToConsumer } from "./consumer.js";

dotenv.config();

const app = express();

var PORT = 5000;
sendOtpToConsumer()
app.listen((PORT) => {
  console.log(`Server Running  on the Port 5000`);
});
