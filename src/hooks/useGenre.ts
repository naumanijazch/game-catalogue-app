
import {useState, useEffect} from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number,
    name: string
    image_background: string
}

interface FetchGenreResponse {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [genre, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      const controller = new AbortController()
      setIsLoading(true)
      const FetchGames = async () => {
        try {
          const res = await apiClient.get<FetchGenreResponse>("/genres", {signal: controller.signal});
          console.log("Res: ", res);
          setGenre(res.data.results);
          setIsLoading(false)
          console.log("Successful");
        } catch (error: any) {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setIsLoading(false)
            console.log("Error: ", error.message);
        }
      };
      FetchGames();
      return ()=> {controller.abort}
    }, []);

    return {genre, error, isLoading}
}

export default useGenres