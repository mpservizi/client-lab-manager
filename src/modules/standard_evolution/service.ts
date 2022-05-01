import { RequisitoNormaModel } from '@src/models/RequisitoNorma';
// import { loadListaAnalisi, loadRequisitiPerNorma } from './api_data';

import {
  loadListaNormeAnalizzate,
  loadRequisitiPerNorma,
  addItem,
  updateItem,
  deleteItem,
  initRepo,
} from './fake_api';

async function _listaNormaAnalizzate() {
  // let result = await loadListaAnalisi();
  let result = await loadListaNormeAnalizzate();
  return result;
}

async function _loadRequisitiPerNorma(idNorma: number) {
  let result = await loadRequisitiPerNorma(idNorma);
  return result;
}

async function _addItem(item: RequisitoNormaModel) {
  // let result = await loadListaAnalisi();
  let result = await addItem(item);
  return result;
}

async function _updateItem(item: RequisitoNormaModel) {
  // let result = await loadListaAnalisi();
  let result = await updateItem(item);
  return result;
}

async function _deleteItem(item: RequisitoNormaModel) {
  // let result = await loadListaAnalisi();
  let result = await deleteItem(item);
  return result;
}

//Carico i fake dati nel db intero
initRepo();

export default {
  loadListaNorme: _listaNormaAnalizzate,
  loadRequisitiPerNorma: _loadRequisitiPerNorma,
  addItem: _addItem,
  updateItem: _updateItem,
  deleteItem: _deleteItem,
};
