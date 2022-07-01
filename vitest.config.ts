import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

defineConfig({
  plugins: [react()],
  test: { environment: 'happy-dom' },
});
