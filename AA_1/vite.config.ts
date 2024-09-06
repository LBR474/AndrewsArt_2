import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:8888/Dist_test/AA_1/dist/",
  plugins: [react()],
});
