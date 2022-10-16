import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

type BlogNormalMenuProps = {
  menuItems: any[]; // TODO: Typing
};

export function BlogNormalMenu({ menuItems }: BlogNormalMenuProps) {
  return (
    <Flex>
      {menuItems.map((item) => (
        <Link key={item.name} href={item.link} passHref>
          <Button as={"a"} colorScheme="linkedin" variant="ghost">
            {item.name}
          </Button>
        </Link>
      ))}
    </Flex>
  );
}
