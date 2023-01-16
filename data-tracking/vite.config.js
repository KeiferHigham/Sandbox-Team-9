import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../extensions/data-tracker/assets/'),
    target: 'es2015',
    lib: {
      name: 'theme-app-extension-example',
      entry: resolve(__dirname, 'src/main.jsx'),
      formats: ['umd'],
    },
  },
  rollupOptions: {
    output: {
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      assetFileNames: '[name].[ext]',
    },
  },
})
