export default {
  state: () => {
    return {
      lista: [],
    };
  },
  actions: {
    loadDati() {
      let dati = service.getAll();
      this.lista = dati;
    },
  },
  getters: {
    numReports() {
      return this.lista.length;
    },
  },
};

const service = {
  getAll() {
    let result = [];
    for (let i = 0; i < 10; i++) {
      let item = {
        codice: `rp22lab${i}`,
        titolo: `Titolo report ${i}`,
      };
      result.push(item);
    }
    return result;
  },
};
