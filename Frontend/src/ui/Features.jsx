import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Features() {
  return (
    <section className="features">
      <div className="feat">
        <FontAwesomeIcon icon={faBook} className="feature-icon" />
        <h3>Extensive Collection</h3>
        <p>Dive into a diverse range of books across genres.</p>
      </div>
      <div className="feat">
        <FontAwesomeIcon icon={faComputer} className="feature-icon" />
        <h3>User-Friendly Interface</h3>
        <p>Easily explor books with our intuitive interface.</p>
      </div>
      <div className="feat">
        <FontAwesomeIcon icon={faStar} className="feature-icon" />
        <h3>Personalized Recommendations</h3>
        <p>Discover tailored book suggestions based on your tastes.</p>
      </div>
    </section>
  );
}

export default Features;
