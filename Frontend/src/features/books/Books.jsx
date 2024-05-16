import Book from "./Book";

function Books({ books }) {
  return (
    <div className="books">
      {books.map((book) => (
        <Book book={book} key={book.title} />
      ))}
    </div>
  );
}

export default Books;
