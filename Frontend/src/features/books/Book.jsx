import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "../../ui/StarRating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Book({ book }) {
  const { handleFavouritesClick, isProductInFavourites } = useAppContext();

  return (
    <div className="book flex align-center flex-col" key={book.title}>
      <Link to={`/book/${book.id}`}>
        <img className="image" src="/images.jpg" alt={book.title} />
      </Link>
      <div className="info-box flex flex-col align-center">
        <p className="author">{book.author}</p>
        <p className="name">{book.title}</p>
        <StarRating rating={3} />
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
