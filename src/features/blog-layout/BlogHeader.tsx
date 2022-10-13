import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Sun } from "@styled-icons/heroicons-outline";
import Link from "next/link";
import React from "react";
import { Menu } from "styled-icons/material";
import { mode } from "@chakra-ui/theme-tools";

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

function BlogBurgerMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box>
      <Drawer isOpen={open} onClose={() => setOpen(false)} placement="left">
        <DrawerOverlay />
        <DrawerContent>Hello this is drawer</DrawerContent>
      </Drawer>
      <IconButton
        aria-label="Menu"
        icon={<Menu size="1em" />}
        onClick={() => setOpen(!open)}
      ></IconButton>
    </Box>
  );
}

function BlogNormalMenu(prop: any) {
  return (
    <Flex>
      {menuItems.map((item) => (
        <Link key={item.name} href={item.link} passHref>
          <Button as={"a"} colorScheme="teal" variant="ghost">
            {item.name}
          </Button>
        </Link>
      ))}
    </Flex>
  );
}

function BlogHeader() {
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
        <BlogNormalMenu />
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

export default BlogHeader;
