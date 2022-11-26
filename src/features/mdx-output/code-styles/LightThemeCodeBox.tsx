import styled from "@emotion/styled";
import { BaseCodeBox } from "./BaseCodeBox";

export const LightThemeCodeBox = styled(BaseCodeBox)`
  div[data-rehype-pretty-code-fragment] pre[data-theme="dark"],
  div[data-rehype-pretty-code-fragment] code[data-theme="dark"],
  div[data-rehype-pretty-code-fragment] div[data-theme="dark"],
  span[data-rehype-pretty-code-fragment] code[data-theme="light"] {
    display: none;
  }

  div[data-rehype-pretty-code-fragment] {
    background-color: rgba(255 255 255 / 1);
    border: 1px solid rgba(27 31 35 / 0.2);
  }

  div[data-rehype-pretty-code-title] {
    background-color: rgba(27 31 35 / 0.1);
    color: black;
  }

  code:not([data-language]),
  span[data-rehype-pretty-code-fragment] {
    background-color: rgba(255 255 255 / 1);
    border: 1px solid rgba(27 31 35 / 0.2);
  }
`;
