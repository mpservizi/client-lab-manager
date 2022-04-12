import fakeDb from './dati';

import { loadListaAnalisi, loadRequisitiPerNorma } from './api_data';

export default {
  loadListaNorme: loadListaAnalisi,
  loadRequisitiPerNorma: loadRequisitiPerNorma,
  addItem: fakeDb.addItem,
  updateItem: fakeDb.updateItem,
  deleteItem: fakeDb.deleteItem,
};
