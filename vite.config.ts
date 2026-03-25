import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Nombre del repositorio en GitHub (sin usuario). Debe coincidir con la URL de Pages. */
const GH_PAGES_BASE = "/Portafolio/";

/**
 * Base por defecto para Vercel/netlify/local build.
 * Para GitHub Pages puedes usar:
 * - VITE_BASE_PATH=/Portafolio/, o
 * - GITHUB_PAGES=true
 */
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.GITHUB_PAGES === "true" ? GH_PAGES_BASE : "/");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
  /** En preview abre la base actual (raíz en Vercel, subruta en Pages). */
  preview: {
    open: base,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
