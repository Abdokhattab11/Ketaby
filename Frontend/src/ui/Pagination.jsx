function Pagination({ booksPerPage, totalBooks, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`${number === currentPage ? "active" : ""}`}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
