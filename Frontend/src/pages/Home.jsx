import { useState } from "react";
import Books from "../features/books/Books";
import { booksWithId } from "../services/books";
import Pagination from "../ui/Pagination";
import Features from "../ui/Features";
import Footer from "../ui/Footer";
import SideNav from "../ui/SideNav";
import { useAppContext } from "../context/AppContext";

function Home() {
  const { showSideNav, setShowSideNav } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksWithId.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <>
      <div className="home">
        <div className="flex align-center justify-between">
          <h1 className="title">Books</h1>
          <button
            className="filter-btn"
            onClick={() => setShowSideNav((s) => !s)}
          >
            Filters
          </button>
        </div>
        <Books books={currentBooks} />
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalBooks={booksWithId.length}
          booksPerPage={booksPerPage}
        />
      </div>

      <Features />
      <Footer />

      {showSideNav && <SideNav />}
    </>
  );
}

export default Home;
