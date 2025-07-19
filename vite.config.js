import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // この行を追加します
  base: "/marry-page/", 
  plugins: [react()],
})
