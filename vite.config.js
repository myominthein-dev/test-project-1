import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', 'framer-motion', '@jdion/tilt-react']
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  optimizeDeps: {
    include: ['framer-motion', 'aos', '@jdion/tilt-react']
  }
});
