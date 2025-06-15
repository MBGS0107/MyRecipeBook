// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Habilita SSR en todas las páginas
  output: 'server',

  // Configura el adapter de Node en modo standalone
  adapter: node({
    mode: 'standalone',
  }),

  server: {
    port: 3000,
    host: true,
  },
});
