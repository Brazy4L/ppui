import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  server: { port: 3003 },
  plugins: [solid(), Icons({ compiler: 'solid' })],
})
