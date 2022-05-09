import { defineStore } from 'pinia';
import { reactive, ref, unref } from 'vue';
import service from './service';

const listaNorme: any[] = reactive([]);

const store = {
  state: () => {
    return {
      listaNorme,
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.getLista();
      //   self.formConfig = await service.getConfigFormNorma();
    },
    // async saveNorma(tmpNorma: INormaForm) {
    //   let pojo = unref(tmpNorma);
    //   let result = await service.salvaNorma(pojo);
    //   //Aggiorno la lista delle norme
    //   this.listaNorme = await service.getListaNorme();

    //   return result;
    // },
    // async updateNorma(tmpNorma: INormaForm) {
    //   let pojo = unref(tmpNorma);
    //   let result = await service.editNorma(pojo);
    //   //Aggiorno la lista delle norme
    //   this.listaNorme = await service.getListaNorme();

    //   return result;
    // },
    // async deleteNorma() {
    //   let id_norma = unref(this.id_norma_attiva);
    //   let result = await service.deleteNorma(id_norma);
    //   //Aggiorno la lista delle norme
    //   this.listaNorme = await service.getListaNorme();

    //   return result;
    // },
  },
  getters: {
    // listaComitees() {
    //   return this.formConfig.lista_comitee;
    // },
  },
};

export const useNormeMonitorStore = defineStore('StoreNormeMonitor', store);
