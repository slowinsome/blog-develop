import styled from "@emotion/styled";
import { BaseCodeBox } from "./BaseCodeBox";
import { DarkThemeCodeBox } from "./DarkThemeCodeBox";

export const OneDarkProCodeBox = styled(DarkThemeCodeBox)`
  div[data-rehype-pretty-code-fragment] pre[data-theme="light"],
  div[data-rehype-pretty-code-fragment] code[data-theme="light"],
  div[data-rehype-pretty-code-fragment] div[data-theme="light"] {
    display: none;
  }
`;
