<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { APP_PATHS } from '@src/modules/mod_paths';
import { Edit } from '@element-plus/icons-vue';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeStore } from '../store';
import { INormaForm, getDefaultNorma } from '../models/Norma';
const store = useNormeStore();

const listaNorme = reactive([]);

onMounted(() => {
  let norme = store.listaNorme;
  //Cancello dati esistenti
  listaNorme.length = 0;
  listaNorme.push(...norme);
});

function apriAddView() {
  MyRouter.pushRoute(APP_PATHS.norme.ADD);
}
function editItem(row: { id: number; title: string }) {
  let payloadNorma = getDefaultNorma();
  Object.assign(payloadNorma, row);
  console.log(payloadNorma);

  MyRouter.pushRoute(APP_PATHS.norme.ADD, payloadNorma);
}
</script>

<template>
  <div>
    <h1>Lista delle norme</h1>
    <div>
      <label for="cerca_norme">Search standard</label>
      <input id="cerca_norme" type="text" />
      <button @click="apriAddView">Add new</button>
    </div>
    <div>
      <el-table
        :data="listaNorme"
        style="width: 100%"
        max-height="800"
        :default-sort="{
          prop: 'id',
          order: 'descending',
        }"
      >
        <el-table-column prop="id" label="ID" sortable> </el-table-column>
        <el-table-column prop="title" label="Title" sortable> </el-table-column>
        <el-table-column fixed="right" label="Action" width="120">
          <template #default="scope">
            <el-button
              type="primary"
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
