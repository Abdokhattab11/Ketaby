const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");

const getAuthorIdByName = async (name) => {
  // We will get Id of author from name
  // Them we will get books by this author ID
  const author = await authorModel.findOne({ name: name });
  if (!author) return null;
  return author.author_id;
};

module.exports = getAuthorIdByName;
