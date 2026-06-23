import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import connectredis from "./config/redis.js";
import userroutes from "./routes/user.routes.js";
import { connectRabbitMQ } from "./config/amqplib.js";
dotenv.config();

const app = express();

var PORT = 5000;
connectDB();
connectredis()
connectRabbitMQ();
app.use("api/v1",userroutes)
app.listen((PORT) => {
  console.log(`Server Running  on the Port 5000`);
});
