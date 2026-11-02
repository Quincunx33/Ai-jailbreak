import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Using relative base ensures static assets load properly on GitHub Pages
  // regardless of custom domain or subpath (e.g. /Ai-jailbreak/)
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {}
  },
  preview: {
    allowedHosts: true
  }
});
