import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log(" Database Connected")
    );

    //console.log("MONGODB_URI:", process.env.MONGODB_URI); // debug

    await mongoose.connect(`${process.env.MONGODB_URI}/quickgpt`);
  } catch (error) {
    console.error(" Database connection error:", error.message);
  }
};

export default connectDB;
