import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    methods: ['GET','POST'],
    allowedHeaders: '*',
    credentials: '*',
  proxy: {
    "/api": {
      ws: true,
      changeOrigin: true,
      target: "http://d10.docksal.site",
      rewrite: (path) => path.replace(/^\/api/, ""),
    }
  }
  },
})
