// astro.config.mjs
/** @ts-check */
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Genera un servidor SSR en lugar de salida estática
  output: 'server',

  // Adapter de Node.js en modo standalone
  adapter: node({
    mode: 'standalone',
  }),

  // Configuración del servidor de desarrollo y producción
  server: {
    host: true,                               // Escucha en todas las interfaces
    port: Number(process.env.PORT) || 3000,   // Usa PORT si viene de entorno, sino 3000
  },

  // Opciones extra de Vite (por ejemplo HMR en LAN)
  vite: {
    server: {
      // Si necesitas exponer HMR fuera de localhost,
      // descomenta y ajusta host y clientPort:
      //
      // hmr: {
      //   host: 'tu.ip.local',    // o usa process.env.HMR_HOST
      //   protocol: 'ws',
      //   clientPort: Number(process.env.PORT) || 3000,
      // },
    }
  },
});
