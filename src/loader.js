/**
 * Importare qui css e script esterni usati nel app
 */

async function initSuiteJS(app) {
  //Caricato nella pagina
  app.provide('suite', window.dhx);
}

async function initScheduler(app) {
  //Caricato nella pagina
  app.provide('scheduler', window.scheduler);
}
async function initSpreadsheet(app) {
  //Caricato nella pagina
  app.provide('mySheet', window.Handsontable);
}
export async function initLoaders(app) {
  await initSuiteJS(app);
  await initScheduler(app);
  await initSpreadsheet(app);
}
