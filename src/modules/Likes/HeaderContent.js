import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./_likes.scss";

const HeaderContent = () => (
  <div className="likes">
    <h1>Your Liked Items</h1>
    <h2>
      presented with <FontAwesomeIcon icon={faHeart} />
    </h2>
  </div>
);

export default HeaderContent;
