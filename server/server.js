// Import the Express framework
const express = require("express");

// Import the Mongoose library for MongoDB
const mongoose = require("mongoose");

// Import the routes defined in the router.js file
const todoRoutes = require("./routes/router");
const mcqRoutes = require("./routes/mcqroute");

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB database
mongoose
  .connect(
    // MongoDB connection URL
    "mongodb+srv://no:nopassword2552@cluster0.itanxxw.mongodb.net/?retryWrites=true&w=majority",
    {
      // MongoDB connection options
      useNewUrlParser: true, // use new URL parser
      useUnifiedTopology: true, // use unified topology
    }
  )
  .then(() => console.log("Connected to MongoDB")) // Success message when connected
  .catch((err) => console.error("Error connecting to MongoDB", err)); // Error message if connection fails

// Set up routes for handling todo-related requests
app.use("/todos", todoRoutes);
app.use("/mcqs", mcqRoutes);

// Start the server and listen for incoming requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
