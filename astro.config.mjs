// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
  site: 'https://cristofereichstadt.github.io',
  base: '/Braun-Barbearia',
});
