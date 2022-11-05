import { Box, LightMode } from "@chakra-ui/react";

import React from "react";

export function LightModeBox({ children }: { children: React.ReactNode }) {
  return (
    <LightMode>
      <Box color="chakra-body-text">{children}</Box>
    </LightMode>
  );
}
