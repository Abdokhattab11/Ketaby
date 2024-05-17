import { useAppContext } from "../context/AppContext";
import Book from "../features/books/Book";

function Favourites() {
  const { favourites } = useAppContext();

  return (
    <div className="favourites-section">
      <h1 className="title">Favourites</h1>
      {favourites.length === 0 && <h2>Nothing To Show.</h2>}
      <div className="favourites-box">
        {favourites.map((book) => (
          <Book book={book} key={book.book_id} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
