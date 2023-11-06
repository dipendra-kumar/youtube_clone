import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      pages: path.resolve(__dirname, "./src/pages"),
    },
  },

  plugins: [react(), tsconfigPaths()],
});
