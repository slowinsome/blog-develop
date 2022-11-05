import { MDXRemote } from "next-mdx-remote";
import { MdxOutput } from "src/lib/mdx";
import LightThemeCodeBox from "../code-styles/LightThemeCodeBox";
import PrismOneDarkCodeBox from "../code-styles/PrismOneDarkCodeBox";
import { MdxComponents } from "./MdxComponents";

type MdxDisplayProps = {
  output: MdxOutput; // TODO: Add File URI
};

export function MdxDisplay({ output }: MdxDisplayProps) {
  return (
    <>
      <LightThemeCodeBox>
        <MDXRemote {...output.html} components={MdxComponents} />
      </LightThemeCodeBox>
    </>
  );
}
