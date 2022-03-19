import { createRouter, createWebHashHistory } from 'vue-router';

//Indicare qui i moduli da caricare nel router
export const MODULI_APP = [
  { path: '/', label: 'Home', folder: 'home' },
  { path: '/norme', label: 'Norme', folder: 'norme' },
  { path: '/reports', label: 'Test reports', folder: 'test-reports' },
];

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
  let entryFile = item.entry || 'index';
  //bisogna indicare estenzione del file, altrimenti non carica
  const mod = await import(`./${item.folder}/${entryFile}.js`);
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
