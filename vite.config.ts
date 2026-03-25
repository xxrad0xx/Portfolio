import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Raíz del sitio. Por defecto `/` (Vercel, preview, etc.).
 * Solo define `VITE_BASE_PATH` si publicas en subcarpeta (p. ej. GitHub Pages):
 *   VITE_BASE_PATH=/Portafolio/
 */
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
  preview: {
    open: base,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
