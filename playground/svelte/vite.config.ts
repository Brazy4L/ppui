import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3002 },
  plugins: [svelte(), Icons({ compiler: 'svelte' })],
})
