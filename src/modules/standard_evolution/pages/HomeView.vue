<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { NOMI_ROUTES } from '../index';
import { useAnalisiNormeStore } from '../store';
import { MyRouter } from '@src/helpers/MyRouter';
import {
  INormaStudio,
  getDefaultNormaStudio,
  getCampi,
} from '../models/NormaStudio';

const store = useAnalisiNormeStore();

//Campi del pojo Norma
let campiNormaModel = getCampi();

// lifecycle hooks
onMounted(() => {});

function apriDetail(item: INormaStudio) {
  store.normaAttiva = item;
  MyRouter.pushRoute(NOMI_ROUTES.LIST, item);
}
</script>

<template>
  <div>
    <h2>Standard evolution</h2>
    <el-table :data="store.listaNorme" style="width: 100%" max-height="800">
      <el-table-column
        :prop="campiNormaModel.title_norma"
        label="Standard"
        sortable
      ></el-table-column>
      <el-table-column
        :prop="campiNormaModel.status"
        label="Status"
        sortable
      ></el-table-column>
      <el-table-column fixed="right" label="Action" width="120">
        <template #default="scope">
          <el-button type="info" @click="apriDetail(scope.row)">Open</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
