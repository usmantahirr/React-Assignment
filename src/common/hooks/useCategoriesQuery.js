import { useQuery } from "react-query";
import { request } from "../utils/axios";

const fetchCategories = () => request({ url: "/browse/categories" });

export const useCategoriesData = () =>
  useQuery("categories", fetchCategories, {
    select: (data) => data?.data?.categories?.items,
  });
