const express = require("express");
const authorController = require("../controllers/authorControllers");

const authorRouter = express.Router();

authorRouter
  .route("/")
  .get(authorController.getAllAuthors)
  .post(authorController.createAuthor);

authorRouter
  .route("/:id")
  .get(authorController.getAuthorById)
  .patch(authorController.updateAuthor)
  .delete(authorController.deleteAuthor);

module.exports = authorRouter;
