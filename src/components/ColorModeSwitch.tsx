import { Stack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);

  return (
    <Stack align="center" paddingTop={5}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize={10} whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </Stack>
  );
};

export default ColorModeSwitch;
