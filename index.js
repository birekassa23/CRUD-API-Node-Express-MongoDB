// index.js
import express from "express";
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
const authRoute = require("./routes/auth.route");

const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Home route
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the Products API.");
});


// Routes
app.use("/api/auth", authRoute);  // Register auth routes
app.use("/api/products", productRoute);


// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
