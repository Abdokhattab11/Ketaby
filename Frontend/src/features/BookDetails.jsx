import { useParams } from "react-router-dom";
import { booksWithId } from "../services/books";
import StarRating from "../ui/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/AppContext";

function BookDetails() {
  const { handleFavouritesClick, isProductInFavourites } = useAppContext();
  const { bookId } = useParams();

  const book = booksWithId.filter((book) => book.id === Number(bookId));

  return (
    <div className="book-details flex">
      <div className="flex flex-col justify-between">
        <h2 className="book-details-title">{book[0].title}</h2>
        <p className="book-details-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis libero
          ipsum quia autem ex. Nostrum tenetur quia sit debitis autem illo,
          voluptates omnis officiis pariatur neque. Accusamus ipsam harum
          numquam eum facere modi quas, id enim, consequatur natus nobis
          adipisci repellat doloribus! Aut, repudiandae distinctio nostrum
          numquam fuga dolorem explicabo! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro, incidunt.
        </p>
        <p className="book-details-author">By {book[0].author}</p>
        <div>
          <button
            className="fav-btn flex align-center"
            style={{ gap: "0.3rem" }}
            onClick={() => handleFavouritesClick(book[0])}
          >
            <FontAwesomeIcon icon={faHeart} />
            {!isProductInFavourites(book[0])
              ? "Add To Favourites"
              : "Remove From Favourites"}
          </button>
        </div>
      </div>

      <div className="flex flex-col align-center image-box">
        <img className="image" src="/images.jpg" alt={book.title} />
        <StarRating rating={3} />
        <p>Rates (371)</p>
      </div>
    </div>
  );
}

export default BookDetails;
