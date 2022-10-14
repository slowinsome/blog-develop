import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type BlogNormalMenuProps = {
  menuItems: any[]; // TODO: Typing
};

export function BlogNormalMenu({ menuItems }: BlogNormalMenuProps) {
  return (
    <Flex>
      {menuItems.map((item) => (
        <Link key={item.name} href={item.link} passHref>
          <Button as={"a"} colorScheme="teal" variant="ghost">
            {item.name}
          </Button>
        </Link>
      ))}
    </Flex>
  );
}
