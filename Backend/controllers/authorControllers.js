const authorModel = require("../models/authorModel");

/**
 * Get All Authors from the database and filter them by the query parameters
 * @param {*} req
 * @param {*} res
 * @QueryParams  rating, nationality
 * @returns {Array} authors
 */
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await authorModel.find();
    if (!authors) {
      throw new Error("No authors found");
    }
    res.status(200).json({
      status: "success",
      lengthOfData: authors.length,
      data: authors,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * Get Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @returns {Object} author
 */
exports.getAuthorById = async (req, res) => {
  try {
    author = await authorModel.findOne({ author_id: req.params.id });
    if (!author) throw new Error("No author found");
    res.status(200).json({ status: "success", data: author });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err.message });
  }
};

/**
 * Create new Author
 * @param {*} req
 * @param {*} res
 * @QueryParams id
 * @returns {Object} author
 */
exports.createAuthor = async (req, res) => {
  try {
    const newAuthor = await authorModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newAuthor,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.deleteAuthor = async (req, res) => {
  try {
    await authorModel.findByIdAndDelete(req.params.author_id);
    res.status(200);
  } catch (e) {
    res.send(404).json({ massage: e });
  }
};

/**
 * Update an Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @param {Object} req.Body
 * @returns {Object} author
 */
exports.updateAuthor = async (req, res) => {
  try {
    const author = await authorModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: author,
    });
  } catch (err) {
    res.send(404).json({ status: "fail", message: err.message });
  }
};
