import { useColorMode } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { MdxOutput } from "src/lib/mdx";
import { getRehypePrettyCodeThemeComponents } from "../code-styles/RehypePrettyCodeThemeSelector";
import { MdxComponents } from "./MdxComponents";

type MdxDisplayProps = {
  output: MdxOutput; // TODO: Add File URI
};

const SelecteLightThemeComponent = getRehypePrettyCodeThemeComponents().light;
const SelecteDarkThemeComponent = getRehypePrettyCodeThemeComponents().dark;

export function MdxDisplay({ output }: MdxDisplayProps) {
  const { colorMode } = useColorMode();

  if (colorMode == "light") {
    return (
      <SelecteLightThemeComponent>
        <MDXRemote {...output.html} components={MdxComponents} />
      </SelecteLightThemeComponent>
    );
  } else {
    return (
      <SelecteDarkThemeComponent>
        <MDXRemote {...output.html} components={MdxComponents} />
      </SelecteDarkThemeComponent>
    );
  }
}
