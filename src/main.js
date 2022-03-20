import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { initLoaders } from './loader.js';
import { initRouter } from './views/router.js';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import "src/styles/element/index.scss";
import 'src/styles/index.scss';

let app;

async function start() {
  app = createApp(App);
  app.use(ElementPlus);
  await initLoaders(app);
  const router = await initRouter();
  app.use(router);
  app.use(createPinia());
  app.mount('#app');
}

start();
