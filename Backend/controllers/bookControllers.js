const bookModel = require("../models/bookModel");
const getAuthorIdByName = require("./test");

/**
 * Get all books from the database and filter them by the query parameters
 * @param {*} req
 * @param {*} res
 * @QueryParams author, title ,[genre], limit, page , sortBy
 * @returns {Array} - An array of books
 */
exports.getAllBooks = async (req, res) => {
  try {
    const query = bookModel.find();
    const QueryParams = req.query;
    // ---------------- Sort By ----------------
    if (QueryParams.sortBy) {
      const sortBy = QueryParams.sortBy.split(",").join(" ");
      query.sort(sortBy);
    }
    // ---------------- Author Filter ----------------
    if (QueryParams.author) {
      // chain the query with the author filter
      // From author name we will get first author id
      const authorId = await getAuthorIdByName(QueryParams.author);
      console.log(authorId);
      query.find({ author_id: authorId });
    }
    // ---------------- Category Filter ----------------
    if (QueryParams.genre) {
      // We will accept it in this formet -> Fantasy,Adventure,SciFi
      // So we will split it and search for each genre
      // Then find all of these genres
      const genres = QueryParams.genre.split(",");
      // This find all books that have at least one of these genres
      query.find({ genre: { $in: genres } });
    }
    // ---------------- Pagination ----------------
    if (QueryParams.page) {
      const limit = +QueryParams.limit || 10;
      const offset = (+QueryParams.page - 1) * limit;
      query.skip(offset).limit(limit);
    }
    const books = await query;
    if (!books.length) throw new Error("No books found");
    res.status(200).json({
      status: "success",
      lengthOfData: books.length,
      data: books,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 *
 * Get a book by its ID and If not exist Return 404
 * @param {*} req
 * @param {*} res
 * @param {String} req.params.id - The ID of the book
 * @returns {Object} - A book object
 */
exports.getBookById = async (req, res) => {
  try {
    const book = await bookModel.findOne({ book_id: req.params.id });
    if (!book) throw new Error("No book found");
    res.status(200).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * Get a book by its name and If not exist Return 404
 * @param {*} req
 * @param {*} res
 * @param {String} req.params.name - The name of the book
 * @returns {Array} - An Array of all matched books
 */

/**
 * Create a new book with the provided data in req.body
 * @param {*} req
 * @param {*} res
 * @param {Object} req.body - The name of the book
 * @returns {Object} - The created book object
 */
exports.createBook = async (req, res) => {
  try {
    const newBook = await bookModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newBook,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * Update a book with the provided data in req.body
 * @param {*} req
 * @param {*} res
 * @param {Object} req.body - The data to update the book with
 * @returns {Object} - The updated book object
 */
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook) throw new Error("No book found");
    res.status(200).json({
      status: "success",
      data: updatedBook,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * Delete a book by its ID
 * @param {*} req
 * @param {*} res
 * @param {String} req.body.id - The ID of the book
 * @returns {Object} - The deleted book object
 */
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) throw new Error("No book found");
    res.status(204).json({
      status: "success",
      data: deletedBook,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
