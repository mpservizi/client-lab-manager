import { defineConfig } from 'vite';
// import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src', 'assets'),
      classi: path.resolve(__dirname, 'src', 'classi'),
      components: path.resolve(__dirname, 'src', 'components'),
      models: path.resolve(__dirname, 'src', 'models'),
      stores: path.resolve(__dirname, 'src', 'stores'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      modules: path.resolve(__dirname, 'src', 'modules'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      external: [
        // path.resolve(__dirname, 'public/libs/suite/suite.js'),
        // path.resolve(__dirname, 'public/libs/suite/suite.css'),
      ],
    },
    chunkSizeWarningLimit: 2000,
  },
  logLevel: 'info',
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
