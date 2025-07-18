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
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "SuperDatePicker",
      fileName: (format: string) => `my-library.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
