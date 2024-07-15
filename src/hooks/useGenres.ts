import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: {
      count: genres.length,
      next: null,
      results: genres,
    },
  });

export default useGenres;
