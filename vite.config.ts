import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
// import { ESLint } from "eslint";

// const eslintOpt = new ESLint({});

export default defineConfig({
  plugins: [ react(), tsconfigPaths()]
});
