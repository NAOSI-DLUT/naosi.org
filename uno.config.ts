import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography(), presetIcons()],
  preflights: [{ getCSS: () => '[class^="i-"] { display: inline-block; }' }],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#549b35",
        dark: "#376b25",
        soft: "#edf6e8",
        light: "#dceecf",
      },
      accent: "#712914",
      ink: "#192219",
      muted: "#687166",
      paper: "#f7f9f4",
      line: "#dfe6da",
    },
  },
});
