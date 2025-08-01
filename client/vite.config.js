import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
})
