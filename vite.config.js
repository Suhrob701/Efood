import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// vite.config.js
export default defineConfig({
  base: "/Efood/", // GitHub Pages uchun kerak
  plugins: [
    react(),
    tailwindcss()
  ],
})
  

