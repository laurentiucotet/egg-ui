import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // the design token addon writes a JSON file to public/ each time it scans
      // watching that file causes an infinite reload loop; ignore it explicitly
      ignored: ['**/public/design-tokens.source.json'],
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
