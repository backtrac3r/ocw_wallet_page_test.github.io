import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  publicPath: "/ocw_wallet_page_test",
  plugins: [vue()],
});
