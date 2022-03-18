/**
 * Importare qui css e script esterni usati nel app
 */

//Non funziona infor in questo modo
//Caricato le librerie in pagina html
// import './libs/suite/suite.css';
// import './libs/scheduler/dhtmlxscheduler_material.css';

// import './libs/suite/suite.js';
// import './libs/scheduler/dhtmlxscheduler.js';

async function initSuiteJS(app) {
  //Script viene caricato nel variabile locale
  // window.dhx = suite;
  app.provide('suite', window.dhx);
}

async function initScheduler(app) {
  //Caricando script viene creata variabile globale scheduler
  app.provide('scheduler', window.scheduler);
}
export async function initLoaders(app) {
  app.provide('w', window);
  console.log(dhx);
  await initSuiteJS(app);
  await initScheduler(app);
}
