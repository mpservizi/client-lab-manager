import fakeDb from './dati';

import { loadListaAnalisi, loadRequisitiPerNorma } from './api_data';

import { loadListaNormeAnalizzate } from './fake_api';

async function listaNormaAnalizzate() {
  // let result = await loadListaAnalisi();
  let result = await loadListaNormeAnalizzate();
  return result;
}

export default {
  loadListaNorme: listaNormaAnalizzate,
  loadRequisitiPerNorma: loadRequisitiPerNorma,
  addItem: fakeDb.addItem,
  updateItem: fakeDb.updateItem,
  deleteItem: fakeDb.deleteItem,
};
