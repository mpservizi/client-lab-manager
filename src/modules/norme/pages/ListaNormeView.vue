<script setup lang="ts">
import { onMounted, reactive, ref, unref } from 'vue';
import { APP_PATHS } from '@src/modules/mod_paths';
import { Edit } from '@element-plus/icons-vue';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeStore } from '../store';
import { INormaForm } from '../models/Norma';
import { Search } from '@element-plus/icons-vue';

const store = useNormeStore();
const model_ricerca = ref('');

const lista_filtro = ref<INormaForm[]>([]);

const createFilter = (queryString: string) => {
  return (item: INormaForm) => {
    let testo_norma = item.title.toLowerCase();
    let criterio = queryString.toLowerCase();
    return testo_norma.includes(criterio);
  };
};

onMounted(() => {
  lista_filtro.value = store.listaNorme;
});

const filterLista = (criterio: string) => {
  const results = criterio
    ? lista_filtro.value.filter(createFilter(criterio))
    : store.listaNorme;

  lista_filtro.value = results;
};

function apriAddView() {
  MyRouter.pushRoute(APP_PATHS.norme.ADD);
}
function editItem(row: { id: number; title: string }) {
  // let payloadNorma = getDefaultNorma();
  // Object.assign(payloadNorma, row);
  store.id_norma_attiva = row.id;
  // Object.assign(store.normaAttiva, payloadNorma);
  MyRouter.pushRoute(APP_PATHS.norme.EDIT);
}

function goBack() {
  MyRouter.pushRoute(APP_PATHS.dashboard.HOME);
}
function resetFilter() {
  model_ricerca.value = '';
  filterLista('');
}
</script>

<template>
  <div>
    <h1>Standard list</h1>
    <div>
      <el-row>
        <el-col :span="4">
          <el-button @click="goBack()">Back</el-button>
          <el-button @click="apriAddView()" type="primary">Add new</el-button>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="model_ricerca"
            placeholder="Filter standard"
            @input="filterLista"
            :prefix-icon="Search"
          />
        </el-col>
        <el-col :span="2">
          <el-button @click="resetFilter()">Reset</el-button>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table
        :data="lista_filtro"
        style="width: 100%"
        max-height="800"
        :default-sort="{
          prop: 'id',
          order: 'descending',
        }"
      >
        <el-table-column prop="title" label="Title" sortable> </el-table-column>
        <el-table-column prop="tipo" label="Type" sortable> </el-table-column>
        <el-table-column prop="entry_date" label="Entry date" sortable>
        </el-table-column>
        <el-table-column fixed="right" label="Action" width="120">
          <template #default="scope">
            <el-button
              type="info"
              @click="editItem(scope.row)"
              :icon="Edit"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped></style>
