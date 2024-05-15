/**
 * Get All Authors from the database and filter them by the query parameters
 * @param {*} req
 * @param {*} res
 * @QueryParams  rating, nationality
 * @returns {Array} authors
 */
exports.getAllAuthors = async (req, res) => {};

/**
 * Get Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @returns {Object} author
 */
exports.getAuthorById = async (req, res) => {};

/**
 * Create new Author
 * @param {*} req
 * @param {*} res
 * @QueryParams id
 * @returns {Object} author
 */
exports.createAuthor = async (req, res) => {};

/**
 * Delete an Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @QueryParams id
 * @returns {Object} author
 */
exports.deleteAuthor = async (req, res) => {};

/**
 * Update an Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @param {Object} req.Body
 * @returns {Object} author
 */
exports.updateAuthor = async (req, res) => {};
