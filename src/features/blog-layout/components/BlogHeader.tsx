import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Sun } from "@styled-icons/heroicons-outline";
import React from "react";
import { BlogBurgerMenu } from "./BlogBurgerMenu";
import { BlogNormalMenu } from "./BlogNormalMenu";

// TODO: Split to file?
const menuItems = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Articles",
    link: "#",
  },
];

export function BlogHeader() {
  const [open, setOpen] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      gap={"4px"}
      align="center"
      borderBottom="solid"
      borderBottomWidth="thin"
      borderBottomColor={mode("gray.200", "gray.700")({ colorMode })}
      p="2px"
    >
      <Box display={{ base: "block", sm: "none" }}>
        <BlogBurgerMenu open={open} setOpen={setOpen} />
      </Box>
      <Text
        bgGradient="linear(to-tr, indigo, cyan)"
        bgClip="text"
        fontSize="xl"
        fontWeight="bold"
      >
        slowinsome&apos;s blog
      </Text>
      <Box display={{ base: "none", sm: "block" }}>
        <BlogNormalMenu menuItems={menuItems} />
      </Box>
      <Spacer />
      <IconButton
        aria-label="Menu"
        icon={<Sun size="1em" />}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}
