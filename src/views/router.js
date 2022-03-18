import { createRouter, createWebHashHistory } from 'vue-router';

//Indicare qui i moduli da caricare nel router
const MODULI = [creaModulo('home'), creaModulo('norme')];

//Crea oggetto con i parametri del modulo
function creaModulo(nome, entry) {
  return {
    folder: nome,
    entryPoint: entry || 'index',
  };
}

//Crea la lista dei routes
async function buildRoutes() {
  let result = [];
  for (const item of MODULI) {
    const modulo = await caricaModuli(item);
    for (const route of modulo) {
      result.push(route);
    }
  }
  return result;
}

//Carica lo script dalla cartella e restituisce il campo router
async function caricaModuli(item) {
  //bisogna indicare estenzione del file, altrimenti non carica
  const mod = await import(`./${item.folder}/${item.entryPoint}.js`);
  return mod.router;
}

export async function initRouter() {
  //Crea i routes per i cari moduli
  const routes = await buildRoutes();

  const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });
  return router;
}
