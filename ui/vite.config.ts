import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  // build: {
  //   rollupOptions: {
  //     // https://rollupjs.org/configuration-options/
  //     input: path.resolve(__dirname, 'dev-server.ts'),
  //     output: {
  //       dir: path.resolve(__dirname, 'dist'),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
