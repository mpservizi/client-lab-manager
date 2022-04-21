/** Indicare qui i nomi dei file da importare. Route è il nome del file*/

const path = require('path');
function init() {
  // let result = loadJs();
  let result = loadJson();
  return result;
}

function loadJson() {
  // return {
  //   posts: [{ id: 1, title: 'json-server', author: 'typicode' }],
  //   comments: [{ id: 1, body: 'some comment', postId: 1 }],
  //   profile: { name: 'typicode' },
  // };
  const tabelle = [
    'classificazione',
    'conformity_matrix',
    'norme',
    'prodotti',
    'requisiti',
  ];
  const nomi_campi = [
    'classificaziones',
    'conformity_matrixs',
    'normas',
    'prodottos',
    'requisitos',
  ];
  let db = {};
  for (const i in tabelle) {
    let nome = tabelle[i];
    let nomeCampo = nomi_campi[i];
    let dati = require(path.join(__dirname, 'tabelle', 'json', `${nome}.json`));
    db[nomeCampo] = dati;
  }
  return db;
}

function loadJs() {
  const tabelle = ['prodotti', 'norme'];
  let db = {};
  for (const i in tabelle) {
    let nome = tabelle[i];
    let tab = require(path.join(__dirname, 'tabelle', 'js', `${nome}`));
    let dati = tab();
    db[nome] = [...dati];
  }
  return db;
}

module.exports = init;
