import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

var PORT = 5000;

app.listen((PORT) => {
  console.log(`Server Running  on the Port 5000`);
});
