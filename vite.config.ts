import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Nombre del repositorio en GitHub (sin usuario). Debe coincidir con la URL de Pages. */
const GH_PAGES_BASE = "/Portafolio/";

/** En `vite dev`, NODE_ENV es `development` → raíz `/`. En `build` y `preview` es `production` → misma base que GitHub Pages para que los assets no den 404 al previsualizar. */
const base =
  process.env.NODE_ENV === "development" ? "/" : GH_PAGES_BASE;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
  /** Con `base` de GitHub Pages, abre esa ruta para que los JS/CSS no den 404. */
  preview: {
    open: GH_PAGES_BASE,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
