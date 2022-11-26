import styled from "@emotion/styled";
import { BaseCodeBox } from "./BaseCodeBox";

export const DarkThemeCodeBox = styled(BaseCodeBox)`
  div[data-rehype-pretty-code-fragment] pre[data-theme="light"],
  div[data-rehype-pretty-code-fragment] code[data-theme="light"],
  div[data-rehype-pretty-code-fragment] div[data-theme="light"],
  span[data-rehype-pretty-code-fragment] code[data-theme="light"] {
    display: none;
  }

  div[data-rehype-pretty-code-fragment] {
    background-color: rgb(255 255 255 / 0.1);
  }

  code:not([data-language]),
  span[data-rehype-pretty-code-fragment] {
    background-color: rgba(255 255 255 / 0.1);
  }
`;
