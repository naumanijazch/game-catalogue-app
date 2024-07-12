import {
  Box,
  //   Spinner,
  Grid,
  Show,
  GridItem,
  Flex,
  //   Text,
} from "@chakra-ui/react";
// import { useState } from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  //   const [isLoading, setIsLoading] = useState(false);

  //   return isLoading ? (
  //     <Box
  //       display="flex"
  //       flexDirection={"column"}
  //       justifyContent="center"
  //       alignItems="center"
  //       height="100vh"
  //     >
  //       <Spinner size={"md"} />
  //       <Text>Redirecting to GitHub Page</Text>
  //     </Box>
  //   ) :
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading></GameHeading>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default Homepage;
