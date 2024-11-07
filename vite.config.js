import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', 'framer-motion', '@jdion/tilt-react']
    }
  },
  optimizeDeps: {
    include: ['framer-motion', 'aos', '@jdion/tilt-react']
  },
  resolve: {
    alias: {
      'framer-motion': 'node_modules/framer-motion/dist/framer-motion.esm.js',
      'aos': 'node_modules/aos/dist/aos.js',
      '@jdion/tilt-react': 'node_modules/@jdion/tilt-react/dist/index.esm.js'
    }
  }
});
