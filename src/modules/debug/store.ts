import { defineStore } from 'pinia';
import service from './service';

const store = {
  state: () => {
    return {
      rootReady: false,
      listaNorme: [],
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.getListaNorme();
    },
    async loadNorme() {
      let result = [];
      return Promise.resolve(result);
    },
    async saveNorma(tmpNorma: any) {
      let newId = Date.now();
      tmpNorma.id = newId;
      return Promise.resolve(tmpNorma);
    },
  },
  getters: {},
};

export const useDebugStore = defineStore('storeDebug', store);
