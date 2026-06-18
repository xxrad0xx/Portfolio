/**
 * Rutas bajo `public/` (p. ej. `image/foo.png`).
 * Debe usarse con `import.meta.env.BASE_URL` para que en preview y GitHub Pages
 * (`base: /Portafolio/`) no fallen los assets.
 */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}
