import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export function BlogMenuHome() {
  return (
    <Link href="/" passHref>
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
    </Link>
  );
}
