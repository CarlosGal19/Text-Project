import mongoose from "mongoose";

export default function connectDB() {
  const url = "mongodb://127.0.0.1/text-project";

  try {
    mongoose.connect(url);
  } catch (e: any) {
    console.error(e.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
