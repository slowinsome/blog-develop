import {
  Box,
  Heading,
  Text,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { TechStackElement } from "@components/TechStackElement/TechStackElement";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack align="center">
      <Text></Text>
      <Heading as="h1" size="2xl">
        slowinsome
      </Heading>
      <Text color="gray">👨‍💻 Software Engineer at Samsung Electronics</Text>
      <Box height="10" />
      <Heading as="h2" size="xl">
        Tech Stack
      </Heading>
      <Box height="12px" />
      <Wrap justify="center" display={"flex"} boxSize="auto">
        <WrapItem>
          <TechStackElement title="Spring Boot" src="logo-springboot.svg" />
        </WrapItem>
        <WrapItem>
          <TechStackElement
            title="MongoDB"
            src={
              colorMode == "light"
                ? "logo-mongodb_leaf-light.png"
                : "logo-mongodb_leaf-dark.png"
            }
          />
        </WrapItem>
        <WrapItem>
          <TechStackElement title="React" src="logo-react.svg" />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};

export default Home;
