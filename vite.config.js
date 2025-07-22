import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // Add Tailwind CSS plugin


// https://vite.dev/config/
export default defineConfig({
  plugins:
    [react(),
    tailwindcss()], // Use the Tailwind CSS plugin

})

