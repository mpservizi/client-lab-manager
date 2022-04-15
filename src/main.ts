import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-ignore
import App from './App.vue';
import { initLoaders } from './loader';
import { initRouter } from './modules/mod_loader';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//Custom style per element plus
import 'src/styles/element/index.scss';
//Css mio
import 'src/styles/index.scss';

let app: any;

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
