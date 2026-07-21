import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://techcub.ro',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});