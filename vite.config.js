import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', 'framer-motion', '@jdion/tilt-react'],
      output : {
        manualChunks : undefined
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir : 'dist',
    assetsDir : 'assets'
  },
  optimizeDeps: {
    include: ['framer-motion', 'aos', '@jdion/tilt-react']
  }
});
