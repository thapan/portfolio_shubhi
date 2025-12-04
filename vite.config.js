import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configure Vite to handle JSX in .js files used throughout the project.
export default defineConfig({
  plugins: [
    react({
      include: [/\.jsx?$/, /\.tsx?$/],
    }),
  ],
  // GH Pages site lives under /portfolio_shubhi/
  base: "/portfolio_shubhi/",
  esbuild: {
    loader: "jsx",
    include: /.*\.[jt]sx?$/,
    exclude: [/node_modules/, /vite\.config\.js/],
  },
  // Ensure dependency optimizer treats .js files as JSX (needed for Layout.js, etc.)
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
