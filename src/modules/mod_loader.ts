import { createRouter, createWebHashHistory, Router } from 'vue-router';

export class ModuloParams {
  constructor(
    public path: string,
    public label: string,
    public folder: string,
    public entry?: string
  ) {}
}
/**
 * Indicare qui i moduli da caricare nel router
 * Campi:
 * path: url dove caricare il modulo
 * label: Label da mostrare in ui per raggiungere url
 * folder: nome della cartella dove sono presenti i file del modulo
 * entry? : entry file che crea i routes del modulo, default = index.js
 */
export const MODULI_APP: ModuloParams[] = [
  new ModuloParams('/', 'Dashboard', 'dashboard'),
  new ModuloParams('/norme', 'Norme', 'norme'),
  new ModuloParams('/studio_norme', 'Standard learning', 'standard_evolution'),
  new ModuloParams('/standard_monitor', 'Standard monitor', 'standard_monitor'),
  new ModuloParams('/prodotti', 'Prodotti', 'prodotti'),
  new ModuloParams(
    '/products_involved',
    'Prodotti coinvolti',
    'products_involved'
  ),
  new ModuloParams('/matrix', 'Conformity Matrix', 'conformity_matrix'),
];

let router: Router;

/**
 * Entry point per creare i routes di tutta app
 * @returns
 */
export async function initRouter() {
  //Crea i routes per i vari moduli
  const routes = await buildRoutes();

  //Crea il router
  router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });
  return router;
}

// Espongo il router in altri moduli
export function getRouter() {
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
async function caricaModuli(item: ModuloParams) {
  //Verifico se è specificato entry file, altrimentic carico index.js
  let entryFile = item.entry || 'index';
  //bisogna indicare estenzione del file, altrimenti Vite non carica il file
  const mod = await import(`./${item.folder}/${entryFile}.ts`);
  //Chiamo il metodo esportato dal modulo per aggiungere i suoi routes
  const routes = mod.initRouter(item);
  //Array con i routes del modulo
  return routes;
}
