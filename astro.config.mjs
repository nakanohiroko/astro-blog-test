import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/server"; // VercelでSSRする場合 (適宜変更)
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
	output: "server", // SSRを有効化
  adapter: vercel(),
});