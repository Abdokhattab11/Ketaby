import { Link, useParams } from "react-router-dom";
import StarRating from "../../ui/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { getBookById } from "../../services/apiBooks";
import Spinner from "../../ui/Spinner";

function BookDetails() {
  const { handleFavouritesClick, isProductInFavourites } = useAppContext();
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {
    title,
    genre,
    description,
    rating,
    number_of_pages: numPages,
    number_of_ratings: numRating,
    cover,
  } = book;

  useEffect(
    function () {
      getBookById(bookId).then((res) => {
        setIsLoading(true);
        setBook(res.data);
        setIsLoading(false);
      });
    },
    [bookId]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="book-details flex">
      <div className="flex flex-col" style={{ gap: "2rem" }}>
        <h2 className="book-details-title">{title}</h2>
        <div>
          <p className="book-details-desc">{description}</p>
          <p className="book-genre">
            Genre: <span>{genre}</span>
          </p>
        </div>
        <Link to="/author" className="book-details-author">
          By Author
        </Link>
        <div>
          <button
            className="fav-btn flex align-center"
            style={{ gap: "0.3rem" }}
            onClick={() => handleFavouritesClick(book)}
          >
            <FontAwesomeIcon icon={faHeart} />
            {!isProductInFavourites(book)
              ? "Add To Favourites"
              : "Remove From Favourites"}
          </button>
        </div>
      </div>

      <div className="flex flex-col align-center image-box">
        <img className="image" src={cover} alt={book.title} />
        <StarRating rating={Math.ceil(rating)} />
        <p>Rates ({numRating})</p>
      </div>
    </div>
  );
}

export default BookDetails;
