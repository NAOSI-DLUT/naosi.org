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
        DEFAULT: "#549d36",
      },
    },
  },
});
