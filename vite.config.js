import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Karena di Vite (ESM) __dirname tidak ada, kita buat manual:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias agar import "components/..." terbaca
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
      assets: path.resolve(__dirname, 'src/assets'),
      variables: path.resolve(__dirname, 'src/variables'),
    },
  },
  esbuild: {
    // Trik agar file .js bisa dianggap sebagai JSX
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})