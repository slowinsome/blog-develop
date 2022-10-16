import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { BlogHeader } from "./BlogHeader";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <Flex align="center" justify="center">
      <VStack align="left" flexGrow={1} maxWidth="800px">
        <BlogHeader />
        {children}
      </VStack>
    </Flex>
  );
}
