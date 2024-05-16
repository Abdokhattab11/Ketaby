const authorModel = require("../models/authorModel");
/**
 * Get All Authors from the database and filter them by the query parameters
 * @param {*} req
 * @param {*} res
 * @QueryParams  rating, nationality
 * @returns {Array} authors
 */
exports.getAllAuthors = async (req, res) => {
    const authors =await Author.find({});
    if(authors){
        res.status(200).json(authors);
    }
    else{
        res.status(404);
    }
};

/**
 * Get Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @returns {Object} author
 */
exports.getAuthorById = async (req, res) => {
    id=req.params.author_id;
    authors=await Author.findOne({author_id:id});
    if(authors){
        res.status(200).json(authors);
    }
    else{
        res.status(404);
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
    await authorModel.create(req.body, (err, author) => {if(err) {
            return res.status(400).send(err);
        }else {
            return res.status(200).json({message: "author successfully added", author});
        }});
    /*const id=req.body.author_id;
    const nam=req.body.author_id;
    const nation=req.boy.nationality;
    const bd=req.body.birthdate;
    const overR=req.body.over_rating;
    let authr={author_id: id, name: nam, nationality: nation, birthdate: bd, over_rating:overR,};
    const newAuthor=new Author(authr);
    await newAuthor.save((err, author) => {
        if(err) {
            return res.status(400).send(err);
        }else {
            return res.status(200).json({message: "author successfully added", author});
        }
    })*/
};

/**
 * Delete an Author by Id and if not exists return 404
 * @param {*} req
 * @param {*} res
 * @QueryParams id
 * @returns {Object} author
 */
exports.deleteAuthor = async (req, res) => {
    /*try{
        await db.Author.remove({req.body.author_id});
        res.status(200);
    }
    catch(e){
        res.send(404).json({massage:e});
    }*/
    try{
        await authorModel.findOneAndDelete({author_id:req.body.author_id});
        res.status(200);
    }
    catch(e){
        res.send(404).json({massage:e});
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
    const filter={author_id:req.body.author_id};
    const updat={author_id: req.body.author_id, name: req.body.name, nationality: req.body.nationalityn, birthdate: req.body.birthdate, over_rating:req.body.over_rating,};
    try{
        await authorModel.findOneAndUpdate(filter,updat);
        res.status(200);
    }
    catch(e){
        res.send(404).json({massage:e});
    }
};
