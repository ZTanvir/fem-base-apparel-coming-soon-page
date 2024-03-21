import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ztanvir.github.io/fem-base-apparel-coming-soon-page/",
  plugins: [react()],
});
