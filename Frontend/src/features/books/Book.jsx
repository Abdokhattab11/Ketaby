import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "../../ui/StarRating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Book({ book }) {
  const { book_id: bookId, title, rating, cover } = book;
  const { handleFavouritesClick, isProductInFavourites } = useAppContext();

  return (
    <div className="book flex align-center flex-col" key={book.title}>
      <Link to={`/book/${bookId}`}>
        <img className="image" src={cover} alt={title} />
      </Link>
      <div className="info-box flex flex-col align-center">
        <p className="author">author</p>
        <p className="name">{title}</p>
        <StarRating rating={Math.ceil(rating)} />
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
