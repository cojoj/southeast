// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const tailwindPlugins =
  /** @type {any} */ (tailwindcss());

export default defineConfig({
  site: "https://southeastjj.pl",
  trailingSlash: "always",

  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: tailwindPlugins,
  },
});
