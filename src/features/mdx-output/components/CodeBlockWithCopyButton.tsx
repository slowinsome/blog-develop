import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { Check2 } from "@styled-icons/bootstrap/Check2";
import { ContentCopy } from "@styled-icons/material/ContentCopy";
import React, { ReactElement, useRef } from "react";

// Referenced from:
// https://joyofcode.xyz/create-a-markdown-blog#markdown-plugins

function isCodeBlock(props: any): boolean {
  return props?.["data-language"] !== undefined;
}

export function setMdxCodeBlockComponent(props: any) {
  if (!isCodeBlock(props)) return <pre {...props} />;
  else return <CodeBlockWithCopyButton {...props} />;
}

type CodeBlockProps = {
  children: React.ReactNode;
  "data-theme": "light" | "dark";
};

export default function CodeBlockWithCopyButton(
  props: React.PropsWithChildren<CodeBlockProps>
): ReactElement {
  const { colorMode } = useColorMode();

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
    <Box
      sx={{ position: "relative" }}
      width="100%"
      data-theme={props["data-theme"]}
    >
      <pre ref={preRef} {...props}>
        {props.children}
      </pre>
      <IconButton
        aria-label="copy"
        icon={
          copiedTimer ? (
            <Check2
              size="1.2em"
              color={colorMode == "light" ? "green" : "lightgreen"}
            />
          ) : (
            <ContentCopy size="1em" />
          )
        }
        onClick={copy}
        variant="outline"
        sx={{
          position: "absolute",
          cursor: "pointer",
          top: "0.4em",
          right: "0.4em",
        }}
        size="md"
        data-theme={props["data-theme"]}
      />
    </Box>
  );
}
