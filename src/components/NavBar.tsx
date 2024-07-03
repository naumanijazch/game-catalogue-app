import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  const githubProfilePicture: string =
    "https://avatars.githubusercontent.com/u/113093372?s=96&v=4";

  return (
    <HStack padding={"10px"}>
      <Image src={githubProfilePicture} boxSize={"60px"} borderRadius={"50%"} />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
