import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ganti dengan nama repository Anda
export default defineConfig({
  base: '/tugasredux2.github.io/',
  plugins: [react()],
});
