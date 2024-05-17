import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/apiBooks";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const [serachInput, setSearchInput] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const { favourites } = useAppContext();

  useEffect(function () {
    getAllBooks().then((res) => setAllBooks(res.data));
  }, []);

  const books = allBooks.filter((book) =>
    book.title.toLowerCase().includes(serachInput.toLowerCase())
  );

  return (
    <nav className="navbar">
      <Logo />
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Book Title"
          value={serachInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {!serachInput ? (
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="search-icon"
            onClick={() => setSearchInput("")}
          />
        )}
        {serachInput && (
          <div className="search-result flex flex-col">
            {books.map((book) => (
              <Link
                to={`/book/${book.book_id}`}
                key={book.book_id}
                className="flex align-center justify-between search-item"
                onClick={() => setSearchInput("")}
              >
                <p className="">{book.title}</p>
                <p className="search-item-genre">{book.genre}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex align-center" style={{ gap: "1.5rem" }}>
        <Link to="/favourite">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          {favourites.length === 0 ? null : (
            <div className="heart-icon-num flex align-center justify-center">
              {favourites.length}
            </div>
          )}
        </Link>
        <Link to="/createbook">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
