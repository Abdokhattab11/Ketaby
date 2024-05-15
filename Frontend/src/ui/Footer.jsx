import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="s">
        <h3>
          <FontAwesomeIcon icon={faBookOpen} className="i1" /> Ketaby
        </h3>
        <p className="des">
          Dive into a world of stories and endless possibilities at our library!
          Explore a vast collection of books in all genres and formats.
        </p>
        <br />
        <p className="rights">2024 All Rights Reserved</p>
      </div>
      <div className="mid">
        <h3 className="com">Company</h3>
        <ul className="company">
          <li>
            <a href="#">About_US</a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
          <li>
            <a href="#">Email </a>
          </li>
        </ul>
      </div>
      <div>
        <img src="../map.png" alt="" className="photo" />
      </div>
    </footer>
  );
}

export default Footer;
