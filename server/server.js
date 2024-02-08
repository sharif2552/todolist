const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/router");


const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://no:nopassword2552@cluster0.itanxxw.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Set up routes
app.use("/todos", todoRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
