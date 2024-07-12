import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ErrorPage from "./ErrorPage";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //* slug will always be available

  console.log("GAME: ", game);
  if (isLoading) return <Spinner />;
  if (error || !game) return <ErrorPage />;

  return (
    <div style={{ padding: 20 }}>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </div>
  );
};

export default GameDetailPage;
