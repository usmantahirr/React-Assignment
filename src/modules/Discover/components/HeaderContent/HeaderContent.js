import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./_header_content.scss";

const HeaderContent = () => (
  <div className="discover_header">
    <h1>Your favourite tunes</h1>
    <h2>
      All <FontAwesomeIcon className="discover_header__sun" icon={faSun} /> and
      all <FontAwesomeIcon className="discover_header__moon" icon={faMoon} />
    </h2>
  </div>
);

export default HeaderContent;
