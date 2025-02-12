// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60,
      bypassToken: 'f3a13dad-b3d3-635a-94b7-eed969401a99',
      exclude: ['/draft'],
    },
  }),
});
