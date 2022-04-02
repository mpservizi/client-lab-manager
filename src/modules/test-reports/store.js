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
        progetto: `PR-00${i + 50}`,
        esito: i % 2 == 0 ? 'Pass' : 'Fail',
      };
      result.push(item);
    }
    return result;
  },
};
