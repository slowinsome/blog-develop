import { GithubLightCodeBox } from "./GithubLightCodeBox";
import { OneDarkProCodeBox } from "./OneDarkProCodeBox";

const CODE_THEMES = {
  "one-dark-pro": OneDarkProCodeBox,
  "github-light": GithubLightCodeBox,
};

let selectedLightTheme: keyof typeof CODE_THEMES = "github-light"; // Default Light Theme
let selectedDarkTheme: keyof typeof CODE_THEMES = "one-dark-pro"; // Default Dark Theme

export function selectRehypePrettyCodeTheme(
  lightTheme: keyof typeof CODE_THEMES,
  darkTheme: keyof typeof CODE_THEMES
) {
  selectedLightTheme = lightTheme;
  selectedDarkTheme = darkTheme;

  return {
    light: lightTheme,
    dark: darkTheme,
  };
}

export function getRehypePrettyCodeThemeComponents() {
  return {
    light: CODE_THEMES[selectedLightTheme],
    dark: CODE_THEMES[selectedDarkTheme],
  };
}
