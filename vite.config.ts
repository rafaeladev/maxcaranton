import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    root: './',
    publicDir: 'public',
    base: './',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            plugins: [],
        },
    },
    css: {
        modules: {
            scopeBehaviour: 'global',
        },
    },
    plugins: [react()],
});
