import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

var PORT = 5000;
connectDB();
app.listen((PORT) => {
  console.log(`Server Running  on the Port 5000`);
});