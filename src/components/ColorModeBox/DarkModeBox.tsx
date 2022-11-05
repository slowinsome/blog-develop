import { Box, DarkMode } from "@chakra-ui/react";

import React from "react";

export function DarkModeBox({ children }: { children: React.ReactNode }) {
  return (
    <DarkMode>
      <Box>{children}</Box>
    </DarkMode>
  );
}
