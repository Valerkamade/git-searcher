import react from "@vitejs/plugin-react";
import { createHash } from "node:crypto";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: (name, filename, css) => {
        const fileBaseName = path
          .basename(filename)
          .replace(/\.module\.(css|scss)$/, "");
        const hash = createHash("md5")
          .update(css)
          .digest("hex")
          .substring(0, 3);
        return `vm_${fileBaseName}__${name}___${hash}`;
      },
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: true,

    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        defaults: true,
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },

  optimizeDeps: {
    include: ["core-js/stable", "regenerator-runtime/runtime"],
  },
});
