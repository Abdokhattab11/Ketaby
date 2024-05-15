const express = require("express");

const app = express();
app.use(express.json());

const bookRouter = require("./routes/bookRouter");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with frontend origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/book", bookRouter);

module.exports = app;
