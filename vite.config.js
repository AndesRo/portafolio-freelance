import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Cambia 'portfolio-freelance' por el nombre de tu repositorio en GitHub
  const base = mode === 'github' ? '/portfolio-freelance/' : '/'
  return {
    plugins: [react()],
    base,
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  }
})