import { defineStore } from 'pinia';

import service from './service';

const store = {
  state: () => {
    return {
      listaNorme: [],
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.loadListaNormeStudio();
    },
  },
  getters: {
    //   doppio() {
    //     return this.count * 2;
    //   },
  },
};

export const useAnalisiNormeStore = defineStore('AnalisiNorme', store);
