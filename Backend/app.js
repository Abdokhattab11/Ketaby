const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello from the backend" });
});

module.exports = app;
