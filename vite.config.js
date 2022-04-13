import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fg from 'fast-glob';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
      {
          name: 'watch-external',
          async buildStart(){
              const files = await fg('public/**');
              for(let file of files){this.addWatchFile(file);}
          }
      }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
