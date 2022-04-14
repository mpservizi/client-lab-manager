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
      let dati = await service.loadListaNorme();
      return dati;
    },
    async loadRequisitiNorma(idNorma) {
      let dati = await service.loadRequisitiPerNorma(idNorma);
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
