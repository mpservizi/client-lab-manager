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
  //Valore casuale da un array
  // @ts-ignore
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  // @ts-ignore
  window.mkt.rndInRange = function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
}
export async function initLoaders(app) {
  setCustomFunctions();
  await initSuiteJS(app);
  await initScheduler(app);
  await initSpreadsheet(app);
}
