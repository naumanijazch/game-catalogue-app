import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //* slug will always be available

  const [showMore, setShowMore] = useState(false);
  const [description, setDescription] = useState("");
  const limit = 500;

  useEffect(() => {
    setDescription(game?.description_raw.slice(0, limit) + " ...");
  }, [game]);

  const handleClick = () => {
    if (game) {
      if (showMore) {
        setDescription(game?.description_raw.slice(0, limit) + " ...");
      } else {
        setDescription(game?.description_raw.split("Español")[0]);
      }
      setShowMore(!showMore);
    }
  };

  if (isLoading) return <Spinner />;
  if (error || !game) return <ErrorPage />;

  return (
    <div style={{ padding: 20 }}>
      <Heading>{game.name}</Heading>
      <Text>
        {description}

        <Button
          size="xs"
          fontWeight={"bold"}
          colorScheme="blue"
          marginLeft={3}
          onClick={() => handleClick()}
        >
          {!showMore ? "Show More" : "Show Less"}
        </Button>
      </Text>
      <GameAttributes game={game}></GameAttributes>
    </div>
  );
};

export default GameDetailPage;
