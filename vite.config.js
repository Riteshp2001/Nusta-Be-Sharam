// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				projects: resolve(__dirname, "projects.html"),
				about: resolve(__dirname, "about.html"),
				contact: resolve(__dirname, "contact.html"),
				ganeshchaturthi: resolve(__dirname, "ganeshchaturthi.html"),
				moharram: resolve(__dirname, "moharram.html"),
				streetportraits: resolve(__dirname, "streetportraits.html"),
				carterroad: resolve(__dirname, "carterroad.html"),
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
});
