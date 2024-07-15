import { Button, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import websiteLogo from "../assets/website_logo.jpeg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const githubProfilePicture: string =
    "https://avatars.githubusercontent.com/u/113093372?s=96&v=4";
  const githubProfileURL: string = "https://github.com/naumanijazch";

  const redirectToGitHub = () => {
    window.open(githubProfileURL, "_blank");
  };

  return (
    <HStack padding={"10px"}>
      <Link to="/">
        <Image
          src={websiteLogo}
          boxSize={"50px"}
          borderRadius={"full"}
          objectFit={"cover"}
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      <Button onClick={() => redirectToGitHub()} variant={"link"}>
        <Image
          src={githubProfilePicture}
          boxSize={"50px"}
          borderRadius={"full"}
          objectFit={"cover"}
          alt="Git Hub Profile"
        />
      </Button>
    </HStack>
  );
};

export default NavBar;
