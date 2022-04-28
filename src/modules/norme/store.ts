import { defineStore } from 'pinia';

const tmpDati = [
  { id: 1, title: 'Norma 1' },
  { id: 2, title: 'Norma 2' },
  { id: 3, title: 'Norma 3' },
  { id: 4, title: 'Norma 4' },
  { id: 5, title: 'Norma 5' },
];

const store = {
  state: () => {
    return {
      rootReady: false,
      listaNorme: [],
    };
  },
  actions: {
    async initModulo() {
      let self = this;
      return new Promise(function (resolve, reejct) {
        let result = [];
        self.listaNorme = tmpDati;
        setTimeout(() => {
          self.rootReady = true;
          return resolve(result);
        }, 3000);
      });
    },
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
