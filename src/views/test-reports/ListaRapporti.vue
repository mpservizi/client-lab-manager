<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useReportsStore } from './../../stores/index';
import { NomiRoutes } from './index';
// reactive state
const router = useRouter();
const store = useReportsStore();
const labels = ref(['Codice', 'Titolo']);

// lifecycle hooks
onMounted(() => {
  store.loadDati();
});

function editItem(item) {
  router.push({ name: NomiRoutes.edit, params: item });
}
function detailItem(item) {
  router.push({ name: NomiRoutes.detail, params: item });
}
</script>

<template>
  <div>
    <h1>List of reports</h1>
    <table>
      <thead>
        <th v-for="(item, index) in labels" :key="index">{{ item }}</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in store.lista" :key="item.codice">
          <td>{{ item.codice }}</td>
          <td>{{ item.titolo }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="detailItem(item)">Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
