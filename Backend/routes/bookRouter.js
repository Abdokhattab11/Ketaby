const express = require("express");
const bookController = require("../controllers/bookControllers");

const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

bookRouter
  .route("/:id")
  .get(bookController.getBookById)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = bookRouter;
