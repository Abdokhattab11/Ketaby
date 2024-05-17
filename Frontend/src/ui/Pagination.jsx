import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination({ totalBooks, booksPerPage, setCurrentPage, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex justify-center">
      <button
        className="left-arrow"
        onClick={() => setCurrentPage((p) => (p > 1 ? p - 1 : 1))}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="number">{currentPage}</div>
      <button
        className="right-arrow"
        onClick={() =>
          setCurrentPage((p) =>
            p === pageNumbers.length ? pageNumbers.length : p + 1
          )
        }
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Pagination;
