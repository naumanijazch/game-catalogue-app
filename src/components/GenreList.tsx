import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  // Spinner,
  // Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data } = useGenres();
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);
  // const { data, isLoading, error } = useGenres();
  // if (error) return null;  // currently set to load from local storage thus not needed
  // if (isLoading) return <Spinner />;

  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => setGenreId(genre.id)}
              fontSize="lg"
              variant="link"
              justifyContent={"flex-start"}
              overflow={"hidden"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
