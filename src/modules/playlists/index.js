import Header from "../../common/components/Header";
import HeaderContent from "./HeaderContent";
import CoreLayout from "../../common/layouts/CoreLayout";

const Playlist = () => {
  return (
    <CoreLayout
      header={
        <Header>
          <HeaderContent />
        </Header>
      }
    >
      <p>Your playlists goes here</p>
    </CoreLayout>
  );
};

export default Playlist;
