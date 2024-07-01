import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>("/games");
        console.log("Res: ", res);
        setGames(res.data.results);
        console.log("Successful");
      } catch (error: any) {
        setError(error.message);
        console.log("Error: ", error.message);
      }
    };
    FetchGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
