import storeNorme from './dati';

export default {
  state: () => {
    return {
      normaAttiva: null,
    };
  },
  actions: {
    async loadDati() {
      let dati = await storeNorme.loadDati();
      return dati;
    },
    async addItem(dati) {
      let result = await storeNorme.addItem(dati);
      return result;
    },
    async updateItem(dati) {
      let result = await storeNorme.updateItem(dati);
      return result;
    },
  },
  getters: {
    //   doppio() {
    //     return this.count * 2;
    //   },
  },
};
