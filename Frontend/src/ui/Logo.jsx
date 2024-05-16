import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/home" className="logo">
      <p className="flex align-center">
        <img src="/open-book.webp" alt="logo" className="logo-image" /> Ketaby
      </p>
    </Link>
  );
}

export default Logo;
