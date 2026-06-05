import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export const useSearchManga = (query, page) => {
  return useQuery({
    queryKey: ["search", query, page],

    queryFn: async () => {
      const res = await api.get(
        `/manga?q=${query}&page=${page}`
      );
      return res.data;
    },

    enabled: !!query?.trim(),
  });
};