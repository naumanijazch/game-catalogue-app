import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem onClick={() => onSelectedPlatform(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
