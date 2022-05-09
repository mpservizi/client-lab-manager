import { defineStore } from 'pinia';
import { reactive, ref, unref } from 'vue';
import { IFormConfig } from './models/FormConfig';
import { getDefaultNorma, INormaForm } from './models/Norma';
import service from './service';

let formConfig: IFormConfig = {
  lista_comitee: [],
  tipi_norme: [],
  tipi_status: [],
  tipi_format_norme: [],
};

const listaNorme: INormaForm[] = reactive([]);
//Id della norma selezionata nella lista, usato per aggiornare e eliminare la norma
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
      let pojo = unref(tmpNorma);
      let result = await service.salvaNorma(pojo);
      //Aggiorno la lista delle norme
      this.listaNorme = await service.getListaNorme();

      return result;
    },
    async updateNorma(tmpNorma: INormaForm) {
      let pojo = unref(tmpNorma);
      let result = await service.editNorma(pojo);
      //Aggiorno la lista delle norme
      this.listaNorme = await service.getListaNorme();

      return result;
    },
    async deleteNorma() {
      let id_norma = unref(this.id_norma_attiva);
      let result = await service.deleteNorma(id_norma);
      //Aggiorno la lista delle norme
      this.listaNorme = await service.getListaNorme();

      return result;
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
    //Restituisce la norma in base al id
    normaAttiva(): INormaForm {
      let self = this;
      let id = self.id_norma_attiva;

      let result: INormaForm = undefined;
      if (id) {
        result = self.listaNorme.find((item: INormaForm) => item.id == id);
      } else {
        result = getDefaultNorma();
      }
      //Quando la norma viene eliminata dalla lista, il result a undefined
      //Questo genera l'errore nel formNorma perchè la props payload diventa undefined
      //Per evitare questo imposto oggetto di default
      if (!result) {
        result = getDefaultNorma();
      }
      return result;
    },
  },
};

export const useNormeStore = defineStore('StoreNorme', store);
