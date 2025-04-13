import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/request-hub/", // Base URL for GitHub Pages
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@@": path.resolve(__dirname),
      "@": path.resolve(__dirname, "src"),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
