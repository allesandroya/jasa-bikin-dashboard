// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  // 🔥 penting: ini harus sama persis dengan nama repository kamu di GitHub
  base: '/jasa-bikin-dashboard/',
})
