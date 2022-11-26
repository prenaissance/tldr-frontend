import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "localhost:5241/api"),
      },
    },
    port: 5000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@assets": "/src/assets",
      "@common": "/src/common",
      "@components": "/src/common/components",
      "@hooks": "/src/common/hooks",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@public": "/public",
    },
  },
});
