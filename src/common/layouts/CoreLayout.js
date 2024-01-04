import SideBar from "../components/SideBar";
import Player from "../components/Player";

function CoreLayout({ header, children }) {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        {header}
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
