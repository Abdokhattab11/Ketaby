import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="s">
        <h3>
          <FontAwesomeIcon icon={faBookOpen} className="i1" /> Ketaby
        </h3>
      </div>
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
