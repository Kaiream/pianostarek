// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro'
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://piano-starek.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [
    db(),
    sitemap(),
    react(),
    markdoc(),
    keystatic()
  ],
});