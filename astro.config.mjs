// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaiream.github.io/pianostarek/',

  integrations: [
    db()
  ],

  adapter: netlify(),
});