import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    files: {
      assets: 'src/lib/assets',
    },
    adapter: adapter(),
  },
  preprocess: preprocess(),
};

export default config;
