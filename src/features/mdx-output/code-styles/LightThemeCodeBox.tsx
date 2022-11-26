import styled from "@emotion/styled";
import { BaseCodeBox } from "./BaseCodeBox";

export const LightThemeCodeBox = styled(BaseCodeBox)`
  div[data-rehype-pretty-code-fragment] pre[data-theme="dark"],
  div[data-rehype-pretty-code-fragment] code[data-theme="dark"],
  div[data-rehype-pretty-code-fragment] div[data-theme="dark"],
  span[data-rehype-pretty-code-fragment] code[data-theme="light"] {
    display: none;
  }
`;
