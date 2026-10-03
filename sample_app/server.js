const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3000;
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://admin:password@mongodb:27017/sample?authSource=admin";

//?authSource=admin

async function start() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start:", err.message);
    process.exit(1);
  }
}

start();
