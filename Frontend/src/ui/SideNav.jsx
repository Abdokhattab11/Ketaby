import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/AppContext";

function SideNav() {
  const { setShowSideNav } = useAppContext();

  return (
    <aside className="sidenav">
      <div>
        <div className="flex align-center justify-between">
          <span>Filter Options</span>
          <div className="close-icon" onClick={() => setShowSideNav(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <ul>
          <li>Best Books</li>
          <li>Most Rated Books</li>
          <li>Featured Books</li>
          <li>Newest Books</li>
          <li>Watch History</li>
        </ul>
      </div>
      <br />

      <span>Category</span>
      <br />
      <div>
        <input type="checkbox" />
        <span>Action</span>
        <br />
        <input type="checkbox" />
        <span>Romance</span>
        <br />
        <input type="checkbox" />
        <span>History</span>
        <br />
        <input type="checkbox" />
        <span>Drama</span>
        <br />
        <input type="checkbox" />
        <span>Crime</span>
        <br />
        <input type="checkbox" />
        <span>Sciencefictio</span>
        <br />
        <input type="checkbox" />
        <span>Philosiphy</span>
        <br />
        <input type="checkbox" />
        <span>Medical</span>
        <br />
        <input type="checkbox" />
        <span>Programming</span>
      </div>
    </aside>
  );
}

export default SideNav;
