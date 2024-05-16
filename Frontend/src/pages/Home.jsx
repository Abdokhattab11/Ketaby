import { useState } from "react";
import Books from "../features/books/Books";
import { booksWithId } from "../services/books";
import Pagination from "../ui/Pagination";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksWithId.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="home">
      <h1 className="title">Books</h1>
      <Books books={currentBooks} />
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalBooks={booksWithId.length}
        booksPerPage={booksPerPage}
      />
    </div>
  );
}

export default Home;
