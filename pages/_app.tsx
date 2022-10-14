import { AppProps } from "next/app";
import { ChakraProviderNextThemes } from "../src/ChakraProviderNextThemes";
import { BlogHeader } from "@features/blog-layout";
import theme from "../styles/theme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    /* By using ChakraProvider at the root of your application, we automatically render a GlobalStyle component. */
    <ChakraProviderNextThemes theme={theme}>
      <BlogHeader />
      <Component {...pageProps} />
    </ChakraProviderNextThemes>
  );
}
