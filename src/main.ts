import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-ignore
import App from './App.vue';
import { initRouter } from './modules/mod_loader';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//Custom style per element plus
import 'src/styles/element/index.scss';
//Css mio
import 'src/styles/index.scss';

//@ts-ignore
import MyLoading from './components/MyLoading.vue';

let app: any;

async function start() {
  app = createApp(App);
  app.use(ElementPlus);
  // await initLoaders(app);
  //Inizializza router
  const router = await initRouter();
  app.use(router);
  //Inizializza store globale
  app.use(createPinia());
  //Registro componenti globali
  registerGlobalComponents();
  //Avvio app
  app.mount('#app');
}

function registerGlobalComponents() {
  app.component('MyLoading', MyLoading);
}

start();
