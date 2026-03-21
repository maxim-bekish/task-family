import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@task-family/shared': path.resolve(__dirname, '../shared/src/index.ts'),
        },
    },
    // Не пребандлить workspace-пакет — иначе часто ломается резолв .ts → .js
    optimizeDeps: {
        exclude: ['@task-family/shared'],
    },
    server: {
        host: true,
        allowedHosts: true,
    },
});
