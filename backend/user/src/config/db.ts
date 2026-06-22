import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("I am From Db");
    var mongoURI = process.env.MONGO_URI as string;
    if (!mongoURI) return console.log("MONGO_URL is Not Defined");

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected successfully via Mongoose.");
  } catch (error: any) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
