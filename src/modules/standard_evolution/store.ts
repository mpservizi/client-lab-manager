import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { getDefaultNormaStudio, INormaStudio } from './models/NormaStudio';
import {
  getDefaultRequisitoNormativo,
  IRequisitoNormativo,
} from './models/RequisitoNormativo';

import service from './service';

//Norma selezionata nella home page
const normaAttiva: INormaStudio = reactive(getDefaultNormaStudio());
//Riga cliccata per edit in lista requisiti
const editRequisito: IRequisitoNormativo = reactive(
  getDefaultRequisitoNormativo()
);
//Lista delle norme da caricare nella homepage
const listaNorme: IRequisitoNormativo[] = reactive([]);

const store = {
  state: () => {
    return {
      listaNorme: listaNorme,
      normaAttiva: normaAttiva,
      editRequisito: editRequisito,
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.loadListaNormeStudio();
    },
    async listaRequsitiNorma(id_norma: number) {
      let dati = await service.loadRequisitiPerNorma(id_norma);
      return dati;
    },
    async creaNuovoRequisito(datiForm: IRequisitoNormativo) {
      //Associo norma attia ai campi del form
      datiForm.id_norma = this.normaAttiva.id_norma;
      let result = await service.addNewRequisito(datiForm);
      //Aggirono la lista
      this.listaNorme = await service.loadListaNormeStudio();
      return result;
    },
    async updateRequisitoNormativo(datiForm: IRequisitoNormativo) {
      let result = await service.updateRequisito(datiForm);
      //Aggirono la lista
      this.listaNorme = await service.loadListaNormeStudio();
      return result;
    },
    async deleteRequisitoNormativo() {
      let result = await service.deleteRequisito(this.editRequisito.id);
      //Aggirono la lista
      this.listaNorme = await service.loadListaNormeStudio();
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
