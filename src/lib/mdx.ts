import { selectRehypePrettyCodeTheme } from "@features/mdx-output/code-styles/RehypePrettyCodeThemeSelector";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// Referenced from:
// https://github.com/leerob/leerob.io/blob/main/lib/mdx.ts
export async function createMdxOutput(source: string): Promise<MdxOutput> {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [
        // Github flavored markdown
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: selectRehypePrettyCodeTheme("github-light", "one-dark-pro"),
            onVisitLine(node: any) {
              // Prevent lines from collapsing in `display: grid` mode, and
              // allow empty lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push("line--highlighted");
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });

  return {
    html: mdxSource,
    readingTime: readingTime(source).text,
  };
}

export type MdxOutput = {
  html: MDXRemoteSerializeResult;
  readingTime: string;
};
