import { resolve } from "path";
import { defineConfig } from "vite";
import HtmlMinifier from "vite-plugin-html-minifier";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

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
		target: "esnext", // Modern JavaScript syntax for better performance
		cssCodeSplit: true, // Split CSS for each page to reduce payload
		sourcemap: false, // Disable sourcemaps in production for smaller builds
		minify: "terser", // Use Terser for better compression
		terserOptions: {
			compress: {
				drop_console: true, // Remove console logs
				drop_debugger: true, // Remove debugger statements
			},
			output: {
				comments: false, // Remove comments
			},
		},
		assetsInlineLimit: 4096, // Inline assets smaller than 4kb
		chunkSizeWarningLimit: 600, // Increase chunk size warning limit
	},
	optimizeDeps: {
		include: [], // Pre-bundle commonly used dependencies (add if needed)
	},
	server: {
		historyApiFallback: true, // Enable SPA fallback
		open: true, // Automatically open the browser on server start
	},

	plugins: [
		HtmlMinifier({
			minify: true, // Minify the HTML files
			removeComments: true, // Remove comments
			collapseWhitespace: true, // Remove unnecessary whitespace
			removeRedundantAttributes: true, // Remove redundant attributes
		}),
		ViteImageOptimizer({
			// Define the optimization options
			mozjpeg: {
				quality: 75, // Compression quality for JPG images (0-100)
			},
			pngquant: {
				quality: [0.6, 0.8], // Compression quality for PNG images (0-1)
			},
			svgo: {
				plugins: [{ removeViewBox: false }, { removeDimensions: true }],
			},
			gifsicle: {
				optimizationLevel: 3, // Optimization level for GIF images (0-3)
			},
			webp: {
				quality: 10, // Compression quality for WebP images
			},
			// Set to true to optimize images during the development server (not recommended for production)
			optimizeImages: true,
		}),
	],
});
