import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // pour que l'appli se lance dans le port 3000 et plus 5173
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
