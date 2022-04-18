/** Indicare qui i nomi dei file da importare. Route è il nome del file*/

const tabelle = ['prodotti', 'norme'];
const path = require('path');
function init() {
  let db = {};
  for (const i in tabelle) {
    let nome = tabelle[i];
    let tab = require(path.join(__dirname, 'tabelle', `${nome}`));
    let dati = tab();
    db[nome] = [...dati];
  }
  return db;
}

module.exports = init;
