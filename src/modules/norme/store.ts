import { defineStore } from 'pinia';
import { IFormConfig } from './models/FormConfig';
import service from './service';

let formConfig: IFormConfig = {
  lista_comitee: [],
  tipi_norme: [],
};

const store = {
  state: () => {
    return {
      rootReady: false,
      listaNorme: [],
      formConfig: formConfig,
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.getListaNorme();
      self.formConfig = await service.getConfigFormNorma();
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
  getters: {
    listaComitees() {
      return this.formConfig.lista_comitee;
    },
    listaTipiNorme() {
      return this.formConfig.tipi_norme;
    },
    listaTabellaNorme() {},
  },
};

export const useNormeStore = defineStore('StoreNorme', store);
