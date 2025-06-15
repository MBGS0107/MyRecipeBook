// astro.config.mjs
/** @ts-check */
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ✅ Adapter correcto para Vercel

export default defineConfig({
  output: 'server',           // ⚙️ Necesario para funciones SSR
  adapter: vercel(),          // ✅ Adapter compatible con Vercel serverless

  // 👇 NO es necesario configurar `server` ni `vite.server` en Vercel
  // porque Vercel gestiona automáticamente los puertos y entornos.
});
