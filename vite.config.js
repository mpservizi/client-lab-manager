import { defineConfig } from 'vite';
// import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

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
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src', 'assets'),
      classi: path.resolve(__dirname, 'src', 'classi'),
      components: path.resolve(__dirname, 'src', 'components'),
      models: path.resolve(__dirname, 'src', 'models'),
      stores: path.resolve(__dirname, 'src', 'stores'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      views: path.resolve(__dirname, 'src', 'views'),
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
});
