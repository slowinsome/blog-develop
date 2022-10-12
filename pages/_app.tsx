import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import BlogHeader from "../src/features/blog-layout/BlogHeader";
import theme from "../styles/theme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    /* By using ChakraProvider at the root of your application, we automatically render a GlobalStyle component. */
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <BlogHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
