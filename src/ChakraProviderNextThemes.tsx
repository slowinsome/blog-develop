import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export function ChakraProviderNextThemes({ ...rest }) {
  return (
    <ThemeProvider storageKey="chakra-ui-color-mode">
      <ChakraProvider {...rest}></ChakraProvider>
    </ThemeProvider>
  );
}
