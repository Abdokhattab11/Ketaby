import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magn" />
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} className="heart" />
      </div>
      <div className="c">
        <FontAwesomeIcon icon={faPlus} className="plus" />
      </div>
    </nav>
  );
}

export default Navbar;
