// index.js

const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://birekassa17828062:birekassa17828062@crudedb.bc4rabb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crudeDB"
  )
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// Home route
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the Products API.");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
