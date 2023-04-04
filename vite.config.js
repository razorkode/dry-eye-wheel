import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
        cssCodeSplit: false,
        commonjsOptions: {
            transformMixedEsModules: false,
        },
    },
});
