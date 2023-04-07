const mongoose = require("mongoose");

async function dbConnection() {
  try {
    const db = await mongoose.connect(process.env.db_remote);
    if (db) {
      console.log("Database connection successful!");
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = dbConnection;
