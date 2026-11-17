import { defineConfig } from 'astro/config';

// User site: https://jlu1211.github.io/  (repository root, not a project subpath)
export default defineConfig({
  site: 'https://jlu1211.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
