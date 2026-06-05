import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export const useMangaDetails = (id) => {

  return useQuery({

    queryKey: ["manga", id],

    queryFn: async () => {

      try {

        const res = await api.get(
          `/manga/${id}`
        );

        return res.data.data;

      } catch (error) {

        throw new Error(
          error.message
        );

      }
    },

  });

};