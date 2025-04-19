import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./dataBase/createConnection.js"; // Custom MongoDB connection module
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";

// Initialize express app
const app = express();

// Load environment variables
dotenv.config(); // Ensure dotenv is loaded before accessing any variables

// Connect to MongoDB database
connectToDatabase();

// Set up port
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home route (landing page)
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the Products API.");
});

// API Routes
app.use("/api/auth", authRoute); // Authentication routes
app.use("/api/products", productRoute); // Product-related routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
