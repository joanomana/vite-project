import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/joanomana/vite-project',
  plugins: [react(), tailwindcss()],
  server:{
    port: 5510
  }
})
