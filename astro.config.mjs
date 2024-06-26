import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pranariaspage.onrender.com',
  integrations: [mdx(), sitemap(), tailwind()],
  server: { 
    port: Number(process.env.PORT) || 5000
  }
});