import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'PEModal',
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => {
        return 'es' !== format ? `PEModal.${format}.js` : `PEModal.esm.js`
      },
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue()
  ],
})
