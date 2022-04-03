import { createRouter, createWebHashHistory } from 'vue-router';
import { RouterBuilder } from 'classi/RouteBuilder';

/**
 * Indicare qui i moduli da caricare nel router
 * Campi:
 * path: url dove caricare il modulo
 * label: Label da mostrare in ui per raggiungere url
 * folder: nome della cartella dove sono presenti i file del modulo
 * entry? : entry file che crea i routes del modulo, default = index.js
 */
export const MODULI_APP = [
  { path: '/debug', label: 'Debug', folder: 'dev' },
  // { path: '/home', label: 'Home', folder: 'home' },
  { path: '/', label: 'Norme', folder: 'norme' },
  // { path: '/reports', label: 'Test reports', folder: 'test-reports' },
];

/**
 * Entry point per creare i routes di tutta app
 * @returns
 */
export async function initRouter() {
  //Crea i routes per i vari moduli
  const routes = await buildRoutes();

  //Crea il router
  const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });
  return router;
}

//Crea la lista dei routes
async function buildRoutes() {
  let result = [];
  for (const item of MODULI_APP) {
    const modulo = await caricaModuli(item);
    for (const route of modulo) {
      result.push(route);
    }
  }
  return result;
}

//Carica lo script dalla cartella e restituisce il campo router
async function caricaModuli(item) {
  //Verifico se è specificato entry file, altrimentic carico index.js
  let entryFile = item.entry || 'index';
  //bisogna indicare estenzione del file, altrimenti Vite non carica il file
  const mod = await import(`./${item.folder}/${entryFile}.js`);
  //Creo il builder per generare i routes
  const builder = new RouterBuilder(item.path, item.folder);
  //Chiamo il metodo esportato dal modulo per aggiungere i suoi routes
  const routes = mod.initRouter(builder);
  //Array con i routes del modulo
  return routes;
}