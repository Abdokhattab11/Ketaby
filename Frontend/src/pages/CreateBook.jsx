import { useState } from "react";
import Input from "../ui/Input";

function CreateBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookUrl, setBookUrl] = useState("");
  const [aboutBook, setAboutBook] = useState("");
  const [aboutAuthor, setAboutAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {};
  }

  return (
    <div className="createbook-section">
      <h2>Add Your Own Book</h2>
      <form className="createbook-form flex flex-col" onSubmit={handleSubmit}>
        <Input
          label="Book Title"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <Input
          label="Book Author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          label="Book URL"
          type="text"
          value={bookUrl}
          onChange={(e) => setBookUrl(e.target.value)}
        />
        <div className="flex flex-col">
          <label>About Book</label>
          <textarea
            placeholder="Enter Book Details"
            value={aboutBook}
            onChange={(e) => setAboutBook(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label>About Author</label>
          <textarea
            placeholder="Enter Author Details"
            value={aboutAuthor}
            onChange={(e) => setAboutAuthor(e.target.value)}
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
