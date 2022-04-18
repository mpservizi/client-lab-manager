/**
 * Inizzializza tutto il repository con i dati fake di tutte le tabelle
 */

import http from '@src/http';
export function initFakeRepo() {
  loadDati();
}

async function loadDati() {
  let dati = await http.get('/api/nomi');
  console.log(dati.data);
}

function initTabNorme() {}
function initTabProdotti() {}
function initTabRequisiti() {}
function initTabRequis() {}
