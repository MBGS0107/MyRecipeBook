// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000, // Puerto 3000
        host: true, // Accesible desde cualquier host
    },
});