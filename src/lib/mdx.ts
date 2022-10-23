import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// Referenced from:
// https://github.com/leerob/leerob.io/blob/main/lib/mdx.ts
export async function createMdxOutput(source: string): Promise<MdxOutput> {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
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
