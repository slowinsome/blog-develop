import styled from "@emotion/styled";
import { BaseCodeBox } from "./BaseCodeBox";

export const DarkThemeCodeBox = styled(BaseCodeBox)`
  div[data-rehype-pretty-code-fragment] pre[data-theme="light"],
  div[data-rehype-pretty-code-fragment] code[data-theme="light"],
  div[data-rehype-pretty-code-fragment] div[data-theme="light"],
  span[data-rehype-pretty-code-fragment] code[data-theme="light"] {
    display: none;
  }
`;
