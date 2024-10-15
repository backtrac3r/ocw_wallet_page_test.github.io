import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "/ocw_wallet_page_test/",
  base: "/ocw_wallet_page_test",
  plugins: [vue()],
});
