import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
   base: './',
  plugins: [
    tailwindcss(),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '.', // puts _redirects in dist/
        },
      ],
    }),
  ],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})