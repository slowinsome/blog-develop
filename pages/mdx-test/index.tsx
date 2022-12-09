import { MdxDisplay } from "@features/mdx-output/components/MdxDisplay";
import { createMdxOutput } from "src/lib/mdx";

// variable with random paragraphs with markdown
let mdxSource = `
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

**Bold text**

*Italic text*

~~Strikethrough text~~

[Link](https://example.com)

> Blockquote

---

- List item 1
- List item 2
- List item 3
  - Nested list item 1
    - Nested list item 2

* Bullet Item 1
  * Nested bullet item 1
  * Nested bullet item 2
* Bullet Item 2

- List item 1
  hello world
  - Nested list item 1
- List item 2

1. List item 1
  1. Nested list item 1
2. List item 2
3. List item 3

![Image](https://via.placeholder.com/150)

\`\`\`js
const code = "Code block";
\`\`\`

| Table | Align |
| --- | --- |
| Left | Center |
| Right | Center |



# Welcome to my MDX + NextJS Demo

## Code examples

\`\`\`bash
npm i use-cloudinary
\`\`\`

\`\`\`jsx
const trying = 'this out';

function App() {
  return <p>{trying}</p>;
}
\`\`\`

## Instructions

Edit \`/src/blogs/example.mdx\` ✅
`;

mdxSource = `
# Welcome to my MDX + NextJS Demo

\`\`\`jsx title="hello.tsx" showLineNumbers
const trying = 'this out';

function App() {
  return <p>{trying}</p>;
}
\`\`\`


yes \`hello this is inline\` hihi


yes \`hello this is inline{:text}\` hihi
hihi
`;

export default function Home({ output }: { output: any }) {
  return (
    <>
      <MdxDisplay output={output} />
      {/* <MDXRemote {...output.html} /> */}
    </>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const mdxOutput = await createMdxOutput(mdxSource);
  console.log("mdxOutput:", mdxOutput);

  return { props: { output: mdxOutput } };
}
