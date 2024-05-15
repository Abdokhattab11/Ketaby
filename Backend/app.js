const express = require("express");

const app = express();

// For Parsing Body For HTTP request
app.use(express.json());

const bookRouter = require("./routes/bookRouter");

// CORS Middleware for allowing requests from the frontend
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with frontend origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Mouting the bookRouter on /book
app.use("/api/v1/book", bookRouter);

module.exports = app;
