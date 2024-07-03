import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card key={"md"} size={"md"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Box whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
          <Heading fontSize="2xl">{game.name}</Heading>
        </Box>{" "}
        <HStack justifyContent="space-between" marginTop={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Box display="flex" alignItems="center">
            <CriticScore score={game.metacritic} />
            <Spacer width={2} />
            <Rating rating={game.rating} />
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
