import "dotenv/config";

import { app } from "app";
import { connectDB } from "configs/db";
const PORT = process.env.PORT || 8001;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      return console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
