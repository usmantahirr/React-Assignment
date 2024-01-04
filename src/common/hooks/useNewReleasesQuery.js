import { useQuery } from "react-query";
import { request } from "../utils/axios";

const fetchNewReleases = () => request({ url: "/browse/new-releases" });

export const useNewReleaseData = () =>
  useQuery("new-releases", fetchNewReleases, {
    select: (data) => data?.data?.albums?.items,
  });
