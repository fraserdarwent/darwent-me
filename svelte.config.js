import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: { default: true },
    adapter: adapter(),
  },
  preprocess: preprocess(),
};

export default config;
