import { Box, Center, Flex, Image, Text, useColorMode } from "@chakra-ui/react";

export function TechStackElement({ title, src }: any) {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      bgGradient="linear(to-tr, indigo, cyan)"
      clipPath="polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
      p="4px"
    >
      <Box
        backgroundColor={colorMode == "light" ? "blue.50" : "gray.900"}
        clipPath="polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
      >
        <Center w="160px" h="120px" p="12px">
          <Image src={src} alt={title} width="auto" height="100%" />
        </Center>
        <Center mb="4px">
          <Text fontWeight="semibold">{title}</Text>
        </Center>
      </Box>
    </Flex>
  );
}
