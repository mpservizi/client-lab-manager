import { RequisitoNormaModel } from '@src/models/RequisitoNorma';
import { NormaModel } from '@src/models/Norma';
import { defineStore } from 'pinia';

import service from './service';
const campiNorma = NormaModel.getCampi();

const store = {
  state: () => {
    return {
      normaAttiva: null,
    };
  },
  actions: {
    //Lista della norme presenti nella tabella dei requisiti
    //Da mostrare in dashboard
    async loadNormeAnalizzate() {
      let dati = await service.loadListaNorme();
      return dati;
    },
    async loadRequisitiNorma(idNorma: number) {
      let dati = await service.loadRequisitiPerNorma(idNorma);
      return dati;
    },
    async addItem(datiForm: any) {
      let item = convertDatiFormInModel(datiForm);
      item.std_id = this.normaAttiva[campiNorma.id];
      let result = await service.addItem(item);
      return result;
    },
    async updateItem(datiForm: any) {
      let item = convertDatiFormInModel(datiForm);
      item.std_id = this.normaAttiva[campiNorma.id];
      let result = await service.updateItem(item);
      return result;
    },
  },
  getters: {
    //   doppio() {
    //     return this.count * 2;
    //   },
  },
};

function convertDatiFormInModel(dati: any): RequisitoNormaModel {
  let result = new RequisitoNormaModel();
  Object.keys(dati).forEach((campo) => {
    result[campo] = dati[campo];
  });
  return result;
}

export const useAnalisiNormeStore = defineStore('AnalisiNorme_old', store);
