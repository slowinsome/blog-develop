import { BlogLayout } from "@features/blog-layout/components/BlogLayout";
import { AppProps } from "next/app";
import { ChakraProviderNextThemes } from "../src/ChakraProviderNextThemes";
import theme from "../styles/theme";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    /* By using ChakraProvider at the root of your application, we automatically render a GlobalStyle component. */
    <ChakraProviderNextThemes theme={theme}>
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    </ChakraProviderNextThemes>
  );
}
