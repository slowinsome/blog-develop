import { GithubLightCodeBox } from "./GithubLightCodeBox";
import { OneDarkProCodeBox } from "./OneDarkProCodeBox";

const CODE_THEMES = {
  "one-dark-pro": OneDarkProCodeBox,
  "github-light": GithubLightCodeBox,
};

let selectedCodeTheme: {
  light: keyof typeof CODE_THEMES;
  dark: keyof typeof CODE_THEMES;
} = {
  light: "github-light", // default light theme
  dark: "one-dark-pro", // default dark theme
};

export function selectRehypePrettyCodeTheme(
  lightTheme: keyof typeof CODE_THEMES,
  darkTheme: keyof typeof CODE_THEMES
) {
  selectedCodeTheme.light = lightTheme;
  selectedCodeTheme.dark = darkTheme;

  return {
    light: lightTheme,
    dark: darkTheme,
  };
}

export function getRehypePrettyCodeThemeComponents() {
  return {
    light: CODE_THEMES[selectedCodeTheme.light],
    dark: CODE_THEMES[selectedCodeTheme.dark],
  };
}
