import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3001 },
  plugins: [vue(), Icons({ compiler: 'vue3' })],
})
