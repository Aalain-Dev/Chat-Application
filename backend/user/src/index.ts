import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import connectredis from "./config/redis.js";
import userroutes from "./routes/user.routes.js";
import { connectRabbitMQ } from "./config/amqplib.js";
dotenv.config();

const app = express();

var PORT_VALUE = process.env.PORT
app.use(express.json())
connectDB();
connectredis();
connectRabbitMQ();
app.use("/api/v1",userroutes)
app.listen(PORT_VALUE,() => {
  console.log(`User Server is Running on ${PORT_VALUE}`);
});
