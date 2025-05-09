import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "./",
  plugins: [solid(), tailwindcss()],
  build: {
    outDir: "docs/CSCI 320/grade-calculator",
  },
});
