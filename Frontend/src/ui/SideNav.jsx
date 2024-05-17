import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/apiBooks";

function SideNav() {
  const { setShowSideNav, showSideNav, category, setCategory } =
    useAppContext();
  const [filterOption, setFilterOption] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(function () {
    getAllBooks().then((res) => setBooks(res.data));
  }, []);

  const filterdBooks = books.filter(
    (book, index, self) =>
      index === self.findIndex((b) => b.genre === book.genre)
  );

  return (
    <aside className={`${showSideNav} sidenav`}>
      <div>
        <div className="flex align-center justify-between">
          <h3>Filter Options</h3>
          <div className="close-icon" onClick={() => setShowSideNav("hidden")}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <ul className="filter-options flex flex-col">
          <li
            onClick={() => setFilterOption("Best Books")}
            className={`${filterOption === "Best Books" ? "active" : ""}`}
          >
            Best Books
          </li>
          <li
            onClick={() => setFilterOption("Most Rated Books")}
            className={`${filterOption === "Most Rated Books" ? "active" : ""}`}
          >
            Most Rated Books
          </li>
          <li
            onClick={() => setFilterOption("Featured Books")}
            className={`${filterOption === "Featured Books" ? "active" : ""}`}
          >
            Featured Books
          </li>
          <li
            onClick={() => setFilterOption("Newest Books")}
            className={`${filterOption === "Newest Books" ? "active" : ""}`}
          >
            Newest Books
          </li>
          <li
            onClick={() => setFilterOption("Watch History")}
            className={`${filterOption === "Watch History" ? "active" : ""}`}
          >
            Watch History
          </li>
        </ul>
      </div>

      <h3 style={{ marginTop: "1.3rem" }}>Category</h3>
      <div className="category">
        {filterdBooks.map((book) => (
          <div key={book.book_id} className="flex align-center category-item">
            <input
              type="checkbox"
              id={book.genre}
              value={category}
              onChange={() => {
                if (category.some((item) => item === book.genre))
                  setCategory((category) =>
                    category.filter((list) => list !== book.genre)
                  );
                else setCategory([...category, book.genre]);
              }}
            />
            <label htmlFor={book.genre}>{book.genre}</label>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideNav;
