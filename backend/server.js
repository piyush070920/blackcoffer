// backend/server.js
const express = require("express");
const itemRoutes = require("./routes/itemRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
dotenv.config();

// Database connection
connectDB();

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/records", itemRoutes);

//PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
