import { Button, HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
  onLoading: ()=> void
}

const NavBar = ({ onSearch, onLoading }: NavBarProps) => {

  const githubProfilePicture: string =
    "https://avatars.githubusercontent.com/u/113093372?s=96&v=4";
  const githubProfileURL: string = "https://github.com/naumanijazch";

  const redirectToGitHub = () => {
    window.location.href = githubProfileURL;
    onLoading()
  };

  return (
    <HStack padding={"10px"}>
      <Button onClick={() => redirectToGitHub()} variant={"link"} padding={0}>
        <Image
          src={githubProfilePicture}
          boxSize={"60px"}
          borderRadius={"full"}
          alt="Git Hub Profile"
        />
      </Button>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
