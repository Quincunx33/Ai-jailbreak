import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Using relative base ensures static assets load properly on GitHub Pages
  // regardless of custom domain or subpath (e.g. /Ai-jailbreak/)
  base: './',
});
