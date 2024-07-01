import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectMongoDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Using existing MongoDB connection.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB.");
    }
};

export default connectMongoDB;
