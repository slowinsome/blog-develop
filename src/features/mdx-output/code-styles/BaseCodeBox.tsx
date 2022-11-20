import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BaseCodeBox = styled(Box)`
  div[data-rehype-pretty-code-fragment] {
    overflow: hidden;
    border-radius: 0.5rem;
  }

  div[data-rehype-pretty-code-fragment] pre {
    overflow-x: auto;

    /* stylist preferences */
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  div[data-rehype-pretty-code-title] {
    /* stylistic preferences */
    margin-bottom: 0.125rem;
    border-radius: 0.375rem;
    background-color: rgb(255 228 230 / 0.1);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(255 228 230 / 0.7);
  }

  div[data-rehype-pretty-code-fragment] .line {
    /* stylistic preferences */
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  div[data-rehype-pretty-code-fragment] .line {
    /* stylistic preferences */
    padding-left: 0.5rem;
    padding-right: 0.75rem;

    border-left-width: 4px;
    border-left-color: transparent;
  }

  div[data-rehype-pretty-code-fragment] .line--highlighted {
    border-left-color: rgb(253 164 175 / 0.7);
    background-color: rgb(254 205 211 / 0.1);
  }

  div[data-rehype-pretty-code-fragment] code {
    display: grid;
    // grid-auto-rows: 1fr;
  }

  code[data-line-numbers] {
    counter-reset: lineNumber;
  }

  code[data-line-numbers] .line::before {
    counter-increment: lineNumber;
    content: counter(lineNumber);
    display: inline-block;
    text-align: right;

    /* stylistic preferences */
    margin-right: 0.75rem;
    width: 1rem;
    color: rgb(255 255 255 / 0.2);
  }
`;