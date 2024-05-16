const mongoose = require("mongoose");

//create author schema
const authorschema = new mongoose.Schema({
  author_id: {
    type: Number,
    unique: [true, "This Author ID is already exists in Database"],
    required: [true, "The Author ID field is Required"],
  },
  name: {
    type: String,
    required: [true, "The Name field is Required"],
    minLength: [3, "The Name field should have at least 3 characters"],
    maxLentgh: [50, "The Name field should not exceed 50 characters"],
  },
  nationality: {
    type: String,
    required: [true, "The nationality field is Required"],
  },
  birthdate: {
    type: Date,
  },
  over_rating: {
    type: Number,
    default: 0,
  },
});

const Author = mongoose.model("Author", authorschema);

module.exports = Author;
