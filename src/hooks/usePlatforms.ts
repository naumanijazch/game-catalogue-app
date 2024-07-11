// With React Query
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 100, // 24 hours
  });

export default usePlatforms;

// With UseState, UseEffect
// import useData from "./useData"

// interface Platform {
//     id: number
//     name: string
//     slug: string
// }

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// export default usePlatforms
