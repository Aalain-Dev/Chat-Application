import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { createClient } from "redis";
dotenv.config();
const app = express();

var PORT = 5000;
connectDB();
const redisClient = createClient({
  url: process.env.REDIS_URL as string,
});
console.log(redisClient)
redisClient.on("connect", () => {
  console.log("🔄 Connecting to Redis...");
});

redisClient.on("ready", () => {
  console.log("✅ Redis Connected");
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});
    await redisClient.connect();

app.listen((PORT) => {
  console.log(`Server Running  on the Port 5000`);
});
