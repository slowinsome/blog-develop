import {
  ActionIcon,
  Burger,
  Button,
  Container,
  Drawer,
  Grid,
  Group,
  Header,
  MediaQuery,
  Text,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { HiOutlineSun } from "react-icons/hi";

const menuItems = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Articles",
    link: "#",
  },
];

function BlogBurgerMenu({
  open,
  setOpen,
  className,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string; // Required by MediaQuery
}) {
  return (
    <Container className={className}>
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        Hello this is drawer
      </Drawer>
      <Burger opened={open} onClick={() => setOpen(!open)} />
    </Container>
  );
}

function BlogNormalMenu(prop: any) {
  return (
    <Group spacing="sm" className={prop.className}>
      {menuItems.map((item) => (
        <Link key={item.name} href={item.link} passHref>
          <Button component="a" variant="subtle">
            {item.name}
          </Button>
        </Link>
      ))}
    </Group>
  );
}

function BlogHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <Header height="60px">
      <Grid align="center" sx={{ width: "100%", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Grid.Col span="content">
            <BlogBurgerMenu open={open} setOpen={setOpen} />
          </Grid.Col>
        </MediaQuery>
        <Grid.Col span="content">
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            size="xl"
            weight={700}
            style={{
              fontFamily: "Greycliff CF, sans-serif",
              marginLeft: "20px",
            }}
          >
            slowinsome&apos;s blog
          </Text>
        </Grid.Col>
        <Grid.Col span="content">
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <BlogNormalMenu />
          </MediaQuery>
        </Grid.Col>
        <Grid.Col span="auto"></Grid.Col>
        <Grid.Col span="content">
          <ActionIcon size="sm">
            <HiOutlineSun size="100%" />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </Header>
  );
}

export default BlogHeader;
