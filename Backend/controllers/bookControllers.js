const bookModel = require("../models/bookModel");
const getAuthorIdByName = require("./test");

/**
 * Get all books from the database and filter them by the query parameters
 * @param {*} req
 * @param {*} res
 * @QueryParams author, category, rating, publishedDate, limit, page , sortBy
 * @returns {Array} - An array of books
 */
exports.getAllBooks = async (req, res) => {
  console.log(req.query);
  const query = bookModel.find();
  const QueryParams = req.query;
  // ---------------- Author Filter ----------------
  if (QueryParams.author) {
    // chain the query with the author filter
    // From author name we will get first author id
    const authorId = await getAuthorIdByName(QueryParams.author);
    console.log(authorId);
    query.find({ author_id: authorId });
  }

  const books = await query;
  res.status(200).json(books);
};

/**
 *
 * Get a book by its ID and If not exist Return 404
 * @param {*} req
 * @param {*} res
 * @param {String} req.params.id - The ID of the book
 * @returns {Object} - A book object
 */
exports.getBookById = async (req, res) => {};

/**
 * Get a book by its name and If not exist Return 404
 * @param {*} req
 * @param {*} res
 * @param {String} req.params.name - The name of the book
 * @returns {Array} - An Array of all matched books
 */
exports.getBookByName = async (req, res) => {};

/**
 * Create a new book with the provided data in req.body
 * @param {*} req
 * @param {*} res
 * @param {Object} req.body - The name of the book
 * @returns {Object} - The created book object
 */
exports.createBook = async (req, res) => {};

/**
 * Update a book with the provided data in req.body
 * @param {*} req
 * @param {*} res
 * @param {Object} req.body - The data to update the book with
 * @returns {Object} - The updated book object
 */
exports.updateBook = async (req, res) => {};

/**
 * Delete a book by its ID
 * @param {*} req
 * @param {*} res
 * @param {String} req.body.id - The ID of the book
 * @returns {Object} - The deleted book object
 */
exports.deleteBook = async (req, res) => {};
