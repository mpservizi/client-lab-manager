/**
 * Importare qui css e script esterni usati nel app
 */

// async function initSuiteJS(app) {
//   //Caricato nella pagina
//   // @ts-ignore
//   app.provide('suite', window.dhx);
// }

// export async function initLoaders(app) {
//   await initSuiteJS(app);
// }

//Espone config salvato in window object
export function getConfig() {
  //@ts-ignore
  return window.config;
}
