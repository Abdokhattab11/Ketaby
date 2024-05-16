const express = require("express");
const morgan = require("morgan");

const app = express();

// For Parsing Body For HTTP request
app.use(express.json());
app.use(morgan("dev"));

// Handle Serving Static files in public folder
app.use(express.static(`${__dirname}/data`));

const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");

// CORS Middleware for allowing requests from the frontend
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with frontend origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/book", bookRouter);
app.use("/api/v1/author", authorRouter);

module.exports = app;
