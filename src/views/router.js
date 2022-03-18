import { createRouter, createWebHashHistory } from 'vue-router';

const MODULI = ['home', 'norme'];

async function bindRoutes() {
  let result = [];
  for (const nome of MODULI) {
    const modulo = await caricaModuli(nome);
    for (const route of modulo) {
      result.push(route);
    }
  }
  return result;
}

async function caricaModuli(nome) {
  const mod = await import(`./${nome}/index.js`);
  return mod.router;
}

export async function initRouter() {
  const routes = await bindRoutes();
  const router = createRouter({
    history: createWebHashHistory(),
    routes // short for `routes: routes`
  });
  return router;
}
