// Referenced from:
// https://joyofcode.xyz/create-a-markdown-blog#markdown-plugins

function isInlineCodeBlock(props: any): boolean {
  return !props?.className?.includes("code-highlight");
}

export function setMdxInlineCodeBlockComponent(props: any) {
  return isInlineCodeBlock(props) ? (
    <code className="language-text">{props.children}</code>
  ) : (
    <code {...props} />
  );
}
