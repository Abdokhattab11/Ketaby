const Book = require("../models/book");

// Write a router handlder that get all books from database model from mongodb
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to get books from the database" });
  }
};

module.exports = {
  getAllBooks,
};
