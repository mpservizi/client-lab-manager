/**
 * Importare qui css e script esterni usati nel app
 */

async function initSuiteJS(app) {
  //Caricato nella pagina
  // @ts-ignore
  app.provide('suite', window.dhx);
}

async function initScheduler(app) {
  //Caricato nella pagina
  // @ts-ignore
  app.provide('scheduler', window.scheduler);
}
async function initSpreadsheet(app) {
  //Caricato nella pagina
  // @ts-ignore
  app.provide('mySheet', window.Handsontable);
}

function setCustomFunctions() {
  //Oggeto custom su window
  // @ts-ignore
  window.mkt = {};
}
export async function initLoaders(app) {
  setCustomFunctions();
  await initSuiteJS(app);
  await initScheduler(app);
  await initSpreadsheet(app);
}
