import { useQuery } from "react-query";
import { request } from "../utils/axios";

const fetchFeaturedPlaylist = () =>
  request({ url: "/browse/featured-playlists" });

export const useFeaturedPlaylistData = () =>
  useQuery("featured-playlist", fetchFeaturedPlaylist, {
    select: (data) => data?.data?.playlists?.items,
  });
