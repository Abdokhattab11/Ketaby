import { useEffect, useState } from "react";
import Books from "../features/books/Books";
import Pagination from "../ui/Pagination";
import Features from "../ui/Features";
import Footer from "../ui/Footer";
import SideNav from "../ui/SideNav";
import { useAppContext } from "../context/AppContext";
import { getAllBooks, sortAndFilterWithPagination } from "../services/apiBooks";
import Spinner from "../ui/Spinner";

function Home() {
  const {
    showSideNav,
    setShowSideNav,
    category,
    allBooks,
    setAllBooks,
    setIsLoading,
    isLoading,
    filterOption,
  } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("SortBy");
  const [totalBooks, setTotalBooks] = useState(0);

  useEffect(function () {
    getAllBooks().then((res) => setTotalBooks(res.lengthOfData));
  }, []);

  useEffect(
    function () {
      sortAndFilterWithPagination({
        sortBy: "publication_year",
        desc: sortBy === "publication_year" ? false : true,
        genre: category.join(","),
        limit: booksPerPage,
        page: currentPage,
      }).then((res) => {
        setIsLoading(true);
        setAllBooks(res.data);
        setIsLoading(false);
      });
    },
    [category, setAllBooks, setIsLoading, currentPage, booksPerPage, sortBy]
  );

  useEffect(
    function () {
      if (filterOption === "Best Books")
        sortAndFilterWithPagination({
          sortBy: "rating",
          desc: true,
          genre: category.join(","),
          limit: booksPerPage,
          page: currentPage,
        }).then((res) => {
          setIsLoading(true);
          setAllBooks(res.data);
          setIsLoading(false);
        });
    },
    [
      booksPerPage,
      category,
      currentPage,
      setAllBooks,
      filterOption,
      setIsLoading,
    ]
  );

  useEffect(
    function () {
      if (filterOption === "Lowest Rating")
        sortAndFilterWithPagination({
          sortBy: "rating",
          desc: false,
          genre: category.join(","),
          limit: booksPerPage,
          page: currentPage,
        }).then((res) => {
          setIsLoading(true);
          setAllBooks(res.data);
          setIsLoading(false);
        });
    },
    [
      booksPerPage,
      category,
      currentPage,
      setAllBooks,
      filterOption,
      setIsLoading,
    ]
  );

  useEffect(
    function () {
      if (filterOption === "Newest Books")
        sortAndFilterWithPagination({
          sortBy: "publication_year",
          desc: true,
          genre: category.join(","),
          limit: booksPerPage,
          page: currentPage,
        }).then((res) => {
          setIsLoading(true);
          setAllBooks(res.data);
          setIsLoading(false);
        });
    },
    [
      booksPerPage,
      category,
      currentPage,
      setAllBooks,
      filterOption,
      setIsLoading,
    ]
  );

  return (
    <>
      <div className="home">
        <div className="flex align-center justify-between">
          <h1 className="title">Books</h1>
          <div className="flex align-center" style={{ gap: "1rem" }}>
            <select
              className="sortby"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Sort By</option>
              <option value={"publication_yearDesc"}>
                Publish Year (recent First)
              </option>
              <option value={"publication_year"}>
                Publish Year (earlier first)
              </option>
            </select>
            <button
              className="filter-btn"
              onClick={() => setShowSideNav("show")}
            >
              Filters
            </button>
          </div>
        </div>

        {isLoading ? <Spinner /> : <Books books={allBooks} />}

        {category.length === 0 && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalBooks={totalBooks}
            booksPerPage={booksPerPage}
          />
        )}
      </div>

      <Features />
      <Footer />

      {showSideNav && <SideNav />}
    </>
  );
}

export default Home;
