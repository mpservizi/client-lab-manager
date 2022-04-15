import { ClassificazioneProdotto } from '@src/models/ClassificazioneProdotto';
import { defineStore } from 'pinia';

import service from './service';
const campiClassificazine = ClassificazioneProdotto.getCampi();

const store = {
  state: () => {
    return {};
  },
  actions: {
    async listaProdotti() {
      let result = await service.loadProdotti();
      return result;
    },
  },
  getters: {
    //   doppio() {
    //     return this.count * 2;
    //   },
  },
};

function convertDatiFormInModel(dati: any): ClassificazioneProdotto {
  let result = new ClassificazioneProdotto();
  Object.keys(dati).forEach((campo) => {
    result[campo] = dati[campo];
  });
  return result;
}

export const useClassificazioneStore = defineStore(
  'ClassificaizoneProdotti',
  store
);
