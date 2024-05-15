/**
 * Get all books from the database and filter them by the query parameters
 * @param {*} req
 * @param {*} res
 * @QueryParams author, category, rating, publishedDate
 * @returns {Array} - An array of books
 */
exports.getAllBooks = async (req, res) => {};

/**
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
