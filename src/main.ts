import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-ignore
import App from './App.vue';
// import { initLoaders } from './loader';
import { initRouter } from './modules/mod_loader';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//Custom style per element plus
import 'src/styles/element/index.scss';
//Css mio
import 'src/styles/index.scss';
//Websocket client
import { MyWebsocket } from './api_websocket/MyWebSocket';

//@ts-ignore
import MyLoading from './components/MyLoading.vue';
let app: any;

//Url del web server
const SERVER_URL = 'http://localhost:3000';

async function start() {
  //Spostare la verifica app.vue, in questo modo si può dare il feedback senza alert
  let result = await initWebSocket();
  if (!result) {
    alert('Errore server connection');
    return;
  }
  console.log('Connected to server');

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

async function initWebSocket() {
  //Inizializzo web socket client
  let result = false;
  try {
    await MyWebsocket.init(SERVER_URL);
    result = true;
  } catch (error) {
    console.log(error);
  }
  return result;
}

function registerGlobalComponents() {
  app.component('MyLoading', MyLoading);
}

start();
