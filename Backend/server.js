const app = require("./app");
const mongoose = require("mongoose");

// Adding config variables to node process
require("dotenv").config({ path: "./config.env" });

const connectionString = process.env.CONNECTION_STRING.replace(
  "<PASSWORD>",
  process.env.PASSWORD
);

// Connect to mongoDB server via mongoose

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
