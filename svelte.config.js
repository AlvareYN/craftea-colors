
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  kit: {
    adapter: adapter({
      
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: '/craftea-colors',
      assets: '/craftea-colors',
      
    },
    prerender: {
      default: true
    },
  },
  preprocess: vitePreprocess(),
};
