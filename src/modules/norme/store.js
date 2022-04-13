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
      // applied_in_abplast: 'Y';
      // base_title: 'IEC 60695-10-2';
      // country: 'International std';
      // edition: 'Ed. 3.0';
      // entry_to_force: '2014';
      // id: 1;
      // language: 'EN/FR';
      // product_category: 'Ball presure';
      // pubblication: '2014-02';
      // status: 'In Application';
      // std_ref_code: '60695-10-2';
      // storage_container: '5';
      // tech_committee: 'IEC';
      // title: 'IEC 60695-10-2:2014-02 Ed. 3.0';
      // valid_until: '2021';
      // let result = dati.map((item) => {
      //   return {
      //     idNorma: item.id,
      //     norma: item.title,
      //     stato: item.status,
      //   };
      // });
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
