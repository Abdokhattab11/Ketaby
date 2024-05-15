import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: rating }, (_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStarSolid}
          style={{ color: "#8966e9", fontSize: "1.1rem" }}
        />
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStarRegular}
          style={{ color: "#999", fontSize: "1.1rem" }}
        />
      ))}
    </div>
  );
}

export default StarRating;
