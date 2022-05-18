<script setup lang="ts">
import { onMounted, reactive, ref, unref } from 'vue';
import { APP_PATHS } from '@src/modules/mod_paths';
import { Edit } from '@element-plus/icons-vue';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeStore } from '../store';
import { INormaForm } from '../models/Norma';
import { Search } from '@element-plus/icons-vue';
import { STATUS_NORMA, TIPI_STANDARDS } from '@src/shared/Costanti';
import { MyDate } from '@src/helpers/MyDate';
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

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: INormaForm;
  rowIndex: number;
}) => {
  if (row.status === STATUS_NORMA.obsolate) {
    return 'norma_obsolate';
  } else if (row.tipo === TIPI_STANDARDS.draft) {
    return 'norma_draft';
  }
  return '';
};

//Converte la data in string
function convertDateForUi(payload: Date | string): string {
  let result = undefined;
  if (!payload) {
    return undefined;
  }

  if (typeof payload == 'string') {
    // let data= MyDate.parseDateFromStr(payload);
    result = payload;
  } else {
    result = MyDate.convertDateToStr(payload);
  }

  return result;
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
      <!-- <div class="legenda">
        <p>
          Legend text color: <span class="norma_obsolate">Obsolate</span>
          <span> - </span>
          <span class="norma_draft">Draft</span>
        </p>
      </div> -->
      <el-table
        :data="lista_filtro"
        :row-class-name="tableRowClassName"
        style="width: 100%"
        max-height="800"
        :default-sort="{
          prop: 'id',
          order: 'descending',
        }"
      >
        <!-- Titolo norma -->
        <el-table-column prop="title" label="Title" sortable> </el-table-column>
        <!-- Tipo standard -->
        <el-table-column prop="tipo" label="Type" sortable> </el-table-column>
        <!-- Status -->
        <el-table-column prop="status" label="Status" sortable>
        </el-table-column>
        <!-- Product type -->
        <el-table-column prop="product_type" label="Product type" sortable>
        </el-table-column>
        <!-- Country -->
        <el-table-column prop="country" label="Country" sortable>
        </el-table-column>
        <!-- Entry date -->
        <el-table-column label="Entry date" sortable>
          <template #default="scope">
            <span style="margin-left: 10px">{{
              convertDateForUi(scope.row.entry_date)
            }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="exit_date" label="Exit date"></el-table-column> -->

        <!-- Note -->
        <el-table-column prop="note" label="Note"></el-table-column>
        <!-- Action -->
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

<style>
.norma_obsolate {
  color: rgb(250, 59, 59);
}
/* .norma_draft {
  color: rgb(0 67 255);
}
.legenda {
  margin-top: 10px;
  margin-bottom: 10px;
} */
</style>
