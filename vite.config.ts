
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vitest/config';

defineConfig({
  plugins: [react(), eslint()],
  test: {
    environment: 'jsdom'
  }
});
