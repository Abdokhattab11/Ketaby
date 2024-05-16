const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  book_id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author_id: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publication_year: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  number_of_pages: {
    type: Number
  },
  number_of_ratings: {
    type: Number
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
