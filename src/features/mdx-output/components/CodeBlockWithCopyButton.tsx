import { Box, IconButton, LightMode } from "@chakra-ui/react";
import { Check2 } from "@styled-icons/bootstrap/Check2";
import { ContentCopy } from "@styled-icons/material/ContentCopy";
import React, { ReactElement, useRef } from "react";

// Referenced from:
// https://joyofcode.xyz/create-a-markdown-blog#markdown-plugins

function isCodeBlock(props: any): boolean {
  return (
    props?.children &&
    React.Children.toArray(props.children).find(
      (child) =>
        React.isValidElement(child) &&
        child?.props?.className.includes("code-highlight")
    ) != undefined
  );
}

export function setMdxCodeBlockComponent(props: any) {
  if (!isCodeBlock(props)) return <pre {...props} />;
  else return <CodeBlockWithCopyButton {...props} />;
}

type CodeBlockProps = {
  children: React.ReactNode;
};

export default function CodeBlockWithCopyButton(
  props: React.PropsWithChildren<CodeBlockProps>
): ReactElement {
  const [copiedTimer, setCopiedTimer] = React.useState<NodeJS.Timeout | null>(
    null
  );
  const preRef = useRef<HTMLPreElement>(null);

  function copy() {
    const content = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(content);
    if (copiedTimer != null) clearTimeout(copiedTimer);
    setCopiedTimer(setTimeout(() => setCopiedTimer(null), 2000));
  }

  return (
    <Box sx={{ position: "relative" }} width="100%">
      <pre ref={preRef} {...props}>
        {props.children}
      </pre>
      <IconButton
        aria-label="copy"
        icon={
          copiedTimer ? (
            <Check2 size="1.2rem" color="lightgreen" />
          ) : (
            <ContentCopy size="1rem" />
          )
        }
        onClick={copy}
        variant="outline"
        sx={{
          position: "absolute",
          cursor: "pointer",
          top: "10px",
          right: "10px",
        }}
      />
    </Box>
  );
}
