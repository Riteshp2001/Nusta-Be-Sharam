// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                projectSingle: resolve(__dirname, 'underwaterrealms.html'),
                ganeshChaturthi: resolve(__dirname, 'ganeshchaturthi.html'),
                moharram: resolve(__dirname, 'moharram.html'),
                streetPortraits: resolve(__dirname, 'streetpotraits.html'),
                carterRoad: resolve(__dirname, 'carterroad.html'),
                cricket: resolve(__dirname, 'cricket.html'),
                banganga: resolve(__dirname, 'banganga.html'),
                randomPics: resolve(__dirname, 'random.html'),
            },
        },
    },
    server: {
        historyApiFallback: true, // Enable SPA fallback
    },
});