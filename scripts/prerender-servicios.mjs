// Corre después de `vite build`.
//
// El sitio es una SPA: Netlify sirve el mismo dist/index.html para todas las rutas,
// así que todas las páginas de /servicios/ salían con el canonical de la home y
// Google no las indexaba. Este script genera dist/servicios/<id>.html, una copia
// de index.html con el canonical y og:url propios de cada servicio.
//
// Netlify sirve /servicios/<id> desde <id>.html (los archivos que existen tienen
// prioridad sobre el catch-all /* -> /index.html), y la app de React arranca igual.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SITE = 'https://elitegaraje.com.ar';

const data = readFileSync('src/data/servicesData.ts', 'utf8');
const ids = [...data.matchAll(/^ {4}id: '([^']+)'/gm)].map((m) => m[1]);
if (ids.length === 0) throw new Error('prerender-servicios: no encontré servicios en servicesData.ts');

const html = readFileSync('dist/index.html', 'utf8');
const canonicalRe = /<link rel="canonical" href="[^"]*"\s*\/?>/;
const ogUrlRe = /<meta property="og:url" content="[^"]*"\s*\/?>/;
if (!canonicalRe.test(html) || !ogUrlRe.test(html)) {
  throw new Error('prerender-servicios: dist/index.html no tiene canonical u og:url');
}

mkdirSync('dist/servicios', { recursive: true });
for (const id of ids) {
  const url = `${SITE}/servicios/${id}`;
  const page = html
    .replace(canonicalRe, `<link rel="canonical" href="${url}" />`)
    .replace(ogUrlRe, `<meta property="og:url" content="${url}" />`);
  writeFileSync(`dist/servicios/${id}.html`, page);
}

console.log(`prerender-servicios: ${ids.length} páginas con canonical propio`);
