import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const Timestamp = new Date().getTime()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: 8080,
    hot: true,
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },

})
