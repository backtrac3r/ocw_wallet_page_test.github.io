import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/ocw_wallet_page_test/",
  publicDir: "./dist",
  plugins: [vue()],
});
