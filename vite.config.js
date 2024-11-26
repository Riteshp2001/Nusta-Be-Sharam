// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				projects: resolve(__dirname, "projects.html"),
				about: resolve(__dirname, "about.html"),
				contact: resolve(__dirname, "contact.html"),
				projectSingle: resolve(__dirname, "underwaterrealms.html"),
				ganeshChaturthi: resolve(__dirname, "ganeshchaturthi.html"),
				moharram: resolve(__dirname, "moharram.html"),
				streetPortraits: resolve(__dirname, "streetportraits.html"),
				carterRoad: resolve(__dirname, "carterroad.html"),
				cricket: resolve(__dirname, "cricket.html"),
				banganga: resolve(__dirname, "banganga.html"),
				monochrome: resolve(__dirname, "monochrome.html"),
				fisherman: resolve(__dirname, "fisherman.html"),
			},
		},
	},
	server: {
		historyApiFallback: true, // Enable SPA fallback
	},
	plugins: [
		ViteImageOptimizer({
			webp: { quality: 50 },
			cache: true,
		}),
	],
});
