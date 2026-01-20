import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: "./index.html"
      }
    }
  },
  ssr: {
    // Externalize dependencies that don't work well in SSR
    noExternal: ['react-router-dom', '@radix-ui/*', 'class-variance-authority', 'clsx', 'tailwind-merge']
  }
}));
