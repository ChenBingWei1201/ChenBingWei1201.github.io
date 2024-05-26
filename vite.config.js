import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ChenBingWei.github.io/',
  build: {
    outDir: 'dist', // Ensure this matches the path in your workflow
  },
});
