import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { ReactComponent as Avatar } from "../../../assets/images/avatar.svg";
import "./_sidebar.scss";

function renderSideBarOption(link, icon, text, { selected } = {}) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        cx("sidebar__option", {
          "sidebar__option--selected": isActive,
        })
      }
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </NavLink>
  );
}

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption("/", faHeadphonesAlt, "Discover", {
          selected: true,
        })}
        {renderSideBarOption("/search", faSearch, "Search")}
        {renderSideBarOption("/favourites", faHeart, "Favourites")}
        {renderSideBarOption("/playlists", faPlayCircle, "Playlists")}
        {renderSideBarOption("/charts", faStream, "Charts")}
      </div>
    </div>
  );
}
