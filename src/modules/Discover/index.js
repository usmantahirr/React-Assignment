import Header from "../../common/components/Header";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import CoreLayout from "../../common/layouts/CoreLayout";
import DiscoverBlock from "./components/DiscoverBlock";

import { useFeaturedPlaylistData } from "../../common/hooks/useFeaturedPlaylistQuery";
import { useCategoriesData } from "../../common/hooks/useCategoriesQuery";
import { useNewReleaseData } from "../../common/hooks/useNewReleasesQuery";

import "./_discover.scss";

const Discover = () => {
  const { data: featured } = useFeaturedPlaylistData();
  const { data: categories } = useCategoriesData();
  const { data: newReleases } = useNewReleaseData();

  return (
    <CoreLayout
      header={
        <Header>
          <HeaderContent />
        </Header>
      }
    >
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases || []}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={featured || []}
        />

        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories || []}
          imagesKey="icons"
        />
      </div>
    </CoreLayout>
  );
};

export default Discover;
