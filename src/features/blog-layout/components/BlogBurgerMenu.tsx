import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { Menu } from "styled-icons/material";

export function BlogBurgerMenu({
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
        variant="ghost"
      ></IconButton>
    </Box>
  );
}
