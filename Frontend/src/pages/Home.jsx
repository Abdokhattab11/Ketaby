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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <h1 className="title">Books</h1>
      <Books books={currentBooks} />
      <Pagination
        totalBooks={booksWithId.length}
        currentPage={currentPage}
        booksPerPage={booksPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;
