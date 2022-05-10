import { defineStore } from 'pinia';
import { reactive, ref, unref } from 'vue';
import service from './service';
import { IItemMonitor, getDefaultModel } from './models/ItemMonitor';
import { MyDate } from '@src/helpers/MyDate';
const listaNorme: IItemMonitor[] = reactive([]);
const itemSelezionato: IItemMonitor = undefined;
const store = {
  state: () => {
    return {
      listaNorme,
      itemSelezionato,
    };
  },
  actions: {
    //Chiamato dal entry view
    async initModulo() {
      let self = this;
      self.listaNorme = await service.getLista();
      //   self.formConfig = await service.getConfigFormNorma();
    },
    async saveNorma(tmpNorma: IItemMonitor) {
      let pojo = unref(tmpNorma);
      let result = await service.insertItem(pojo);
      //Aggiorno la lista delle norme
      this.listaNorme = await service.getLista();

      return result;
    },
    async updateItem(tmpNorma: IItemMonitor) {
      let pojo = unref(tmpNorma);
      let result = await service.editItem(pojo);
      //Aggiorno la lista delle norme
      this.listaNorme = await service.getLista();

      return result;
    },
    async deleteItem() {
      let item_attivo: IItemMonitor = unref(this.itemSelezionato);
      let result = await service.deleteItem(item_attivo.id);
      //Aggiorno la lista delle norme
      this.listaNorme = await service.getLista();
      return result;
    },
  },
  getters: {
    // listaComitees() {
    //   return this.formConfig.lista_comitee;
    // },
  },
};

export const useNormeMonitorStore = defineStore('StoreNormeMonitor', store);
