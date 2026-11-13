// At the very top of your main file (index.js/server.js), before any Mongo import
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]); // Google DNS
// or Cloudflare: ['1.1.1.1', '1.0.0.1']

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose
  .connect(process.env.DB!)
  .then(() => console.log("DB connected"))
  .catch(() => console.log("Failed to connect portfolio db"));

export const connectDB = () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.DB!, {
    serverSelectionTimeoutMS: 5000, // Fail fast after 5s instead of hanging
  });
};
