import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer'

// https://vite.dev/config/ /Web-LSI/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
            test: /\.(jpe?g|png|webp)$/i,
            png: { quality: 80 },
            jpeg: { quality: 80 },
            webp: { quality: 80 }
        })
  ],
  //base: '/Web-LSI/' 
  
})



