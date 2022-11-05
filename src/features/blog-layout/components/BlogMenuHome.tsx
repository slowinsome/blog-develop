import { Button, Text } from "@chakra-ui/react";

export function BlogMenuHome() {
  return (
    <Button variant="unstyled">
      <Text
        bgGradient="linear(to-tr, indigo, cyan)"
        bgClip="text"
        fontSize="xl"
        fontWeight="bold"
      >
        slowinsome&apos;s blog
      </Text>
    </Button>
  );
}
