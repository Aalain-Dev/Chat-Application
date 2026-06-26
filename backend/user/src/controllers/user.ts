import TryCatch from "../config/TryCatch.js";
import { redisClient } from "../config/redis.js";
import { publishToQueue } from "../config/amqplib.js";

export const login = TryCatch(async (req, res) => {
  const { email } = req.body;
  const ratelimitkey = `otp:ratelimit:${email}`;
  const ratelimit = await redisClient.get(ratelimitkey);
  if (ratelimit) {
    return res.status(429).json({
      message: "To many Request",
    });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpkey = `otp:${email}`;
  await redisClient.set(otpkey, otp, {
    EX: 300,
  });
  await redisClient.set(ratelimitkey, "true", {
    EX: 60,
  });
  const message = {
    to: email,
    subject: "Your Otp Code",
    body: `Your OTP is ${otp}. It is Valid for 5 Minutes`,
  };
  await publishToQueue("send-otp", message);
});
