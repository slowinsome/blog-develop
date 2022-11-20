import {
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { setMdxCodeBlockComponent } from "./CodeBlockWithCopyButton";
import { setMdxInlineCodeBlockComponent } from "./InlineCodeBlock";

export const MdxComponents = {
  h1: (props: any) => <Heading as="h1" size="2xl" {...props} />,
  h2: (props: any) => <Heading as="h2" size="xl" {...props} />,
  h3: (props: any) => <Heading as="h3" size="lg" {...props} />,
  h4: (props: any) => <Heading as="h4" size="md" {...props} />,
  h5: (props: any) => <Heading as="h5" size="md" {...props} />,
  h6: (props: any) => <Heading as="h6" size="md" {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  ul: (props: any) => <UnorderedList {...props} />, // TODO: Nested lists
  li: (props: any) => <ListItem {...props} />,
  pre: (props: any) => setMdxCodeBlockComponent(props),
  // code: (props: any) => setMdxInlineCodeBlockComponent(props),
};
