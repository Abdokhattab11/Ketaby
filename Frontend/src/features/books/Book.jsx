import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "../../ui/StarRating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Book({ book }) {
  const {
    book_id: bookId,
    title,
    rating,
    genre,
    cover,
    publication_year: publicationYear,
  } = book;
  const { handleFavouritesClick, isProductInFavourites } = useAppContext();

  return (
    <div className="book flex align-center flex-col" key={book.title}>
      <Link to={`/book/${bookId}`}>
        <img className="image" src={cover} alt={title} />
      </Link>
      <div className="info-box flex flex-col align-center">
        {/* <p className="author">author</p> */}
        <div className="flex flex-col align-center">
          <p className="name">{title}</p>
          <div className="flex align-center" style={{ gap: "1rem" }}>
            <p className="genre">{genre}</p>
            <p className="publish">{publicationYear}</p>
          </div>
        </div>
        <StarRating rating={Math.floor(rating)} />
      </div>
      <FontAwesomeIcon
        icon={faHeart}
        className={`${isProductInFavourites(book) ? "active" : ""} fav-icon`}
        onClick={() => handleFavouritesClick(book)}
      />
    </div>
  );
}

export default Book;
