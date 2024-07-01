import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectMongoDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;


