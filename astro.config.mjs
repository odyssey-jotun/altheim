import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://odyssey-jotun.github.io',
  base: '/altheim',
  trailingSlash: 'always',
  integrations: [react()],
});