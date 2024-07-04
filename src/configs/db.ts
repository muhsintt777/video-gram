import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    if (!MONGO_URI) throw new Error("no db url found");

    const connectionInstance = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      // socketTimeoutMS: 45000,
    });
    console.log(
      `mongoDB connected HOST: ${connectionInstance.connection.host}`,
    );
  } catch (err) {
    console.log("mongodb connection failed", err);
    process.exit(1);
  }
};
