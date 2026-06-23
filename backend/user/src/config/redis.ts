import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();
const redisClient = createClient({
  url: process.env.REDIS_URL as string,
});
redisClient.on("connect", () => { 
  console.log("🔄 Connecting to Redis...");
});
                                                     
redisClient.on("ready", () => {
  console.log("✅ Redis Connected");
});
                                                     
redisClient.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});
const connectredis = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    console.log(e);
  }
};
export default connectredis;