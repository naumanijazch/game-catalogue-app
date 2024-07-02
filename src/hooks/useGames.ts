import { useState, useEffect } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} []
    metacritic: number
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController()
      const FetchGames = async () => {
        try {
          const res = await apiClient.get<FetchGamesResponse>("/games", {signal: controller.signal});
          console.log("Res: ", res);
          setGames(res.data.results);
          console.log("Successful");
        } catch (error: any) {
            if (error instanceof CanceledError) return;
            setError(error.message);
            console.log("Error: ", error.message);
        }
      };
      FetchGames();
      return ()=> {controller.abort}
    }, []);

    return {games, error}
}

export default useGames
