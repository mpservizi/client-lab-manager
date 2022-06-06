<script setup lang="ts">
import { onMounted, reactive, ref, computed } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeMonitorStore } from '../store';
import { IItemMonitor } from './../models/ItemMonitor';
//ICone bottoni
import { Edit } from '@element-plus/icons-vue';
import { MyDate } from '@src/helpers/MyDate';

// Modello dati da usare nella tabelle
interface ItemTabella {
  id: number | undefined;
  standard: string;
  who: string;
  source: string;
  last_update: string;
  note: string;
}

const store = useNormeMonitorStore();
const listaTabella: ItemTabella[] = reactive([]);
const listaFiltroTabella: ItemTabella[] = reactive([]);

const search_input = ref('');

onMounted(async () => {
  listaTabella.length = 0;
  listaFiltroTabella.length = 0;
  store.listaNorme.forEach((item) => {
    let pojo = convertiModelInItemTabella(item);
    listaTabella.push(pojo);
    listaFiltroTabella.push(pojo);
  });
  //Reset campi usati per passare i dati della norma selezionata
  resetPayloadInStore();
});

//Converte IItemMonitor in ItemTabella
function convertiModelInItemTabella(item: IItemMonitor): ItemTabella {
  let result: ItemTabella = {
    id: item.id,
    standard: item.norma.title,
    who: item.who,
    source: item.source,
    last_update: MyDate.convertDateToStr(item.last_update),
    note: item.note,
  };
  return result;
}

function apriDetail(riga: ItemTabella) {
  //Ricavo model originale in base al id e imposto come quello selezionato
  store.itemSelezionato = store.listaNorme.find((item) => item.id == riga.id);
  store.itemNorma = store.itemSelezionato.norma;
  MyRouter.pushRoute(NOMI_ROUTES.EDIT);
}
function addNewItem() {
  resetPayloadInStore();
  MyRouter.pushRoute(NOMI_ROUTES.ADD);
}

//Resetta campi usati per passare i dati della norma selezionata
function resetPayloadInStore() {
  store.itemSelezionato = undefined;
  store.itemNorma = undefined;
}

function handleSearch(criteri: string) {
  if (search_input.value.length > 0) {
    let filtro = listaTabella.filter((item) => {
      let testo = item.standard.toLowerCase();
      let criteri = search_input.value.toLowerCase();
      return testo.indexOf(criteri) !== -1;
    });

    listaFiltroTabella.length = 0;
    listaFiltroTabella.push(...filtro);
  } else {
    listaFiltroTabella.length = 0;
    listaFiltroTabella.push(...listaTabella);
  }
}
</script>

<template>
  <div>
    <h1>Standard monitoring status</h1>
    <div>
      <el-row>
        <el-col :span="6">
          <el-button @click="addNewItem()">Add new</el-button>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="search_input"
            placeholder="search"
            @input="handleSearch"
            clearable
          ></el-input>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table
        :data="listaFiltroTabella"
        style="width: 100%"
        max-height="800"
        :default-sort="{
          prop: 'last_update',
          order: 'descending',
        }"
      >
        <!--  -->
        <el-table-column
          label="Standard"
          prop="standard"
          sortable
        ></el-table-column>
        <!--  -->
        <el-table-column
          label="Author"
          prop="who"
          width="150"
          sortable
        ></el-table-column>
        <!-- Last Update -->
        <el-table-column
          label="Last update"
          prop="last_update"
          width="150"
          sortable
        ></el-table-column>
        <!-- Source -->
        <el-table-column
          label="Source"
          prop="source"
          width="400"
          sortable
        ></el-table-column>

        <!--  -->
        <el-table-column
          label="Note"
          prop="note"
          width="300"
          sortable
        ></el-table-column>
        <!--  -->
        <el-table-column fixed="right" label="Action" width="120">
          <template #default="scope">
            <el-button
              type="primary"
              @click="apriDetail(scope.row)"
              :icon="Edit"
              circle
            ></el-button>
          </template>
        </el-table-column>
        <!-- Fine campi tabella -->
      </el-table>
    </div>
  </div>
</template>

<style scoped></style>
