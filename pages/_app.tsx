import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import BlogHeader from "../src/features/blog-layout/BlogHeader";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ChakraProvider>
      <BlogHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
