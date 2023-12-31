import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Connected To MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
