<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NOMI_ROUTES } from '../index';
import { useAnalisiNormeStore } from '../store';
const router = useRouter();
// const route = useRoute();

const store = useAnalisiNormeStore();

const listaActivity = ref([]);

const model = ref({
  id: 'idNorma',
  titolo: 'norma',
  status: 'stato',
});
// lifecycle hooks
onMounted(async () => {
  listaActivity.value = await store.listaAvtivity();
});

function apriDetail(item) {
  let obj = JSON.parse(JSON.stringify(item));
  store.normaAttiva = obj;
  router.push({ name: NOMI_ROUTES.LISTA });
}
</script>

<template>
  <div>
    <h2>Standard evolution</h2>
    <el-table :data="listaActivity" style="width: 100%" max-height="800">
      <el-table-column
        :prop="model.titolo"
        label="Standard"
        sortable
      ></el-table-column>
      <el-table-column
        :prop="model.status"
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
