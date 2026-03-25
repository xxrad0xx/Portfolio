import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Nombre del repositorio en GitHub (sin usuario). Debe coincidir con la URL de Pages. */
const GH_PAGES_BASE = "/Portafolio/";

/**
 * Base de la app. En Vercel (`VERCEL=1`) siempre `/` aunque existan otras env
 * por error (p. ej. `GITHUB_PAGES`), para que JS/CSS no fallen.
 * Para GitHub Pages en otro CI: `VITE_BASE_PATH=/Portafolio/` o `GITHUB_PAGES=true`.
 */
const base =
  process.env.VERCEL === "1"
    ? "/"
    : process.env.VITE_BASE_PATH ??
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
