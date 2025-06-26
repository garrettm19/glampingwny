import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'workbox-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Glamping WNY',
        short_name: 'GlampingWNY',
        description: 'Luxury glamping experiences in Western New York',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-intersection-observer', 'lenis'],
          forms: ['react-hook-form', 'zod', '@hookform/resolvers']
        }
      }
    },
    target: 'esnext',
    sourcemap: true,
    cssMinify: true
  },
  server: {
    port: 3000,
    open: true
  }
});