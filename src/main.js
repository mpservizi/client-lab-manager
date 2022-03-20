import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { initLoaders } from './loader.js';
import { initRouter } from './views/router.js';

let app;

async function start() {
  app = createApp(App);
  await initLoaders(app);
  const router = await initRouter();
  app.use(router);
  app.use(createPinia());
  app.mount('#app');
}

start();
