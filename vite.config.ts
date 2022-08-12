import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';

const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      exclude: ['windicss', 'node_modules']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${variablePath}';`
      }
    },
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]'
    }
  }
});
