import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import unocss from "unocss/astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://naosi.org",
  integrations: [unocss({ injectReset: true }), pagefind(), sitemap()],
});
