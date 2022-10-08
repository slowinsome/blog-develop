import { Button, Grid, Group, Header, Text } from "@mantine/core";
import Link from "next/link";

function BlogHeader() {
  return (
    <Header height="60px">
      <Grid align="center" sx={{ width: "100%", height: "100%" }}>
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
        <Grid.Col span="auto"></Grid.Col>
        <Grid.Col span="content">
          <Group spacing="sm">
            <Link href="#" passHref>
              <Button component="a" variant="subtle">
                About
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button component="a" variant="subtle">
                Articles
              </Button>
            </Link>
          </Group>
        </Grid.Col>
      </Grid>
    </Header>
  );
}

export default BlogHeader;
