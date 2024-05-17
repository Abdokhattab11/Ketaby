import { useState } from "react";
import Input from "../ui/Input";

function CreateBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [aboutBook, setAboutBook] = useState("");
  const [rating, setRating] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [numRating, setNumRating] = useState(0);
  const [publishYear, setPublishYear] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      title: bookTitle,
      genre: genre,
      publication_year: Number(publishYear),
      description: aboutBook,
      rating: Number(rating),
      number_of_pages: Number(numPages),
      number_of_ratings: Number(numRating),
      cover: "http://localhost:8080/cover.jpg",
    };
    console.log(newBook);
  }

  return (
    <div className="createbook-section flex flex-col align-center">
      <h2>Add Your Own Book</h2>
      <form className="createbook-form flex flex-col" onSubmit={handleSubmit}>
        <Input
          label="Book Title"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <Input
          label="Author Name"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          label="Book Category"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <div className="flex justify-between">
          <Input
            min={0}
            max={5}
            style={{ width: "6rem" }}
            label="Book Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <Input
            style={{ width: "6rem" }}
            label="Number of Ratings"
            type="number"
            value={numRating}
            onChange={(e) => setNumRating(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <Input
            style={{ width: "6rem" }}
            label="Number of Pages"
            type="number"
            value={numPages}
            onChange={(e) => setNumPages(e.target.value)}
          />
          <Input
            style={{ width: "6rem" }}
            label="Book Publish Year"
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>About Book</label>
          <textarea
            placeholder="Enter Book Description"
            value={aboutBook}
            onChange={(e) => setAboutBook(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button className="form-btn">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBook;
