import { defineStore } from 'pinia';

import service from './service';

const store = {
  state: () => {
    return {
      normaAttiva: null,
    };
  },
  actions: {
    async listaAvtivity() {
      const dati = [
        { idNorma: 's-0087', norma: 'IEC 60669-1:2017', stato: 'In Progress' },
        { idNorma: 's-0082', norma: 'NBN 61 314-1:2017', stato: 'TBD' },
        { idNorma: 's-0189', norma: 'IEC 60884-1:2013', stato: 'Done' },
        { idNorma: 's-0542', norma: 'AUS 2145:2016', stato: 'In Progress' },
      ];
      return Promise.resolve(dati);
    },
    async loadDati() {
      let dati = await service.loadDati();
      return dati;
    },
    async addItem(dati) {
      let result = await service.addItem(dati);
      return result;
    },
    async updateItem(dati) {
      let result = await service.updateItem(dati);
      return result;
    },
  },
  getters: {
    //   doppio() {
    //     return this.count * 2;
    //   },
  },
};

export const useAnalisiNormeStore = defineStore('AnalisiNorme', store);
