import { defineStore } from 'pinia';

const store = {
  state: () => {
    return {};
  },
  actions: {
    async loadNorme() {
      let result = [];
      return Promise.resolve(result);
    },
    async getListaComitees() {
      const listaComitee = [
        { id: 1, title: 'IEC' },
        { id: 2, title: 'EN' },
        { id: 3, title: 'CEI' },
        { id: 4, title: 'IEC EN' },
      ];
      return Promise.resolve(listaComitee);
    },
    async saveNorma(tmpNorma: any) {
      let newId = Date.now();
      tmpNorma.id = newId;
      return Promise.resolve(tmpNorma);
    },
  },
  getters: {
    //   doppio() {
    //     return this.count * 2;
    //   },
  },
};

export const useNormeStore = defineStore('StoreNorme', store);
