import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/my-portfolio/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/globals/variables";
         @import "@/assets/scss/globals/functions";
         @import "@/assets/scss/globals/breakpoints";
         @import "@/assets/scss/globals/utilities";`,
        quietDeps: true
      }
    }
  }
})
