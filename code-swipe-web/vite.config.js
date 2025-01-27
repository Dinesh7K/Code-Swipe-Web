// filepath: /Users/d2c-k2.dinesh/Documents/NODE-JS/Code-Swipe-Web/Code-Swipe-Web/code-swipe-web/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
});