import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

const ErrorPage = () => {
  const error = useRouteError();
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner size={"md"} />
      <Text>Redirecting to GitHub Page</Text>
    </Box>
  ) : (
    <>
      <NavBar onLoading={() => setIsLoading(true)} />
      <Box style={{ paddingLeft: 10 }}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexcepted error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
