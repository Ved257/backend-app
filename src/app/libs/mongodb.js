import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectMongoDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Example: Increased to 30 seconds
      socketTimeoutMS: 45000, // Example: Increased to 45 seconds
    });
    
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;



