import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { IFormConfig } from './models/FormConfig';
import { getDefaultNorma, INormaForm } from './models/Norma';
import service from './service';

let formConfig: IFormConfig = {
  lista_comitee: [],
  tipi_norme: [],
};

const listaNorme: INormaForm[] = reactive([]);
// const normaAttiva: INormaForm = reactive(getDefaultNorma());
const id_norma_attiva: number = ref(undefined);

const store = {
  state: () => {
    return {
      rootReady: false,
      listaNorme,
      formConfig,
      id_norma_attiva,
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.getListaNorme();
      self.formConfig = await service.getConfigFormNorma();
    },
    async saveNorma(tmpNorma: INormaForm) {
      let newId = Date.now();
      tmpNorma.id = newId;
      return Promise.resolve(tmpNorma);
    },
    async updateNorma(tmpNorma: INormaForm) {
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
    normaAttiva(): INormaForm {
      let self = this;
      let id = self.id_norma_attiva;

      let result = getDefaultNorma();
      if (id != undefined && id > 0) {
        result = self.listaNorme.find((item: INormaForm) => item.id == id);
      }
      return result;
    },
  },
};

export const useNormeStore = defineStore('StoreNorme', store);
