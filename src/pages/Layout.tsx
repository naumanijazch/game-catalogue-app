import { useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Layout = () => {
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
      <Outlet />
    </>
  );
};

export default Layout;
