import { useEffect, useState } from "react";
import Books from "../features/books/Books";
import Pagination from "../ui/Pagination";
import Features from "../ui/Features";
import Footer from "../ui/Footer";
import SideNav from "../ui/SideNav";
import { useAppContext } from "../context/AppContext";
import { bookPagination, getAllBooks } from "../services/apiBooks";
import Spinner from "../ui/Spinner";
import { books } from "../services/books";

function Home() {
  const { showSideNav, setShowSideNav } = useAppContext();
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  useEffect(
    function () {
      bookPagination(booksPerPage, currentPage).then((res) => {
        setIsLoading(true);
        setAllBooks(res.data);
        setIsLoading(false);
      });
    },
    [currentPage, booksPerPage]
  );

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

        {isLoading ? <Spinner /> : <Books books={allBooks} />}

        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalBooks={books.length}
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
