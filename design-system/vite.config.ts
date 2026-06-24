import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// Library build: emits an ESM entry (dist/index.es.js), a single bundled
// stylesheet (dist/stepwords-ds.css), and a .d.ts tree. React is externalized
// so the design-sync bundle assigns the real exports to window.<global>.
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.json" }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.es.js",
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: (asset) =>
          asset.names?.some((n) => n.endsWith(".css"))
            ? "stepwords-ds.css"
            : "[name][extname]",
      },
    },
  },
});
