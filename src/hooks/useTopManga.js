import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export const useTopManga = (page) => {
  return useQuery({
    queryKey: ["top-manga", page],

    queryFn: async () => {
      const res = await api.get(
        `/top/manga?page=${page}`
      );

      return res.data;
    },
  });
};