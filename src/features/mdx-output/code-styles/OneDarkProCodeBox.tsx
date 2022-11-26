import styled from "@emotion/styled";
import { DarkThemeCodeBox } from "./DarkThemeCodeBox";

export const OneDarkProCodeBox = styled(DarkThemeCodeBox)`
  div[data-rehype-pretty-code-fragment] {
    background-color: rgb(255 255 255 / 0.1);
  }

  code:not([data-language]),
  span[data-rehype-pretty-code-fragment] {
    background-color: rgba(255 255 255 / 0.1);
  }
`;
