import styled from "@emotion/styled";
import { LightThemeCodeBox } from "./LightThemeCodeBox";

export const GithubLightCodeBox = styled(LightThemeCodeBox)`
  div[data-rehype-pretty-code-fragment] {
    background-color: rgba(255 255 255 / 1);
    border: 1px solid rgba(27 31 35 / 0.2);
  }

  div[data-rehype-pretty-code-title] {
    background-color: rgba(27 31 35 / 0.1);
    color: black;
  }
`;
