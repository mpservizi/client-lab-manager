<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NOMI_ROUTES } from './index';
import { useAnalisiNormeStore } from 'src/stores/index';

import RouteLinkBtn from 'components/RouteLinkBtn.vue';
const router = useRouter();
// const route = useRoute();

const dati = [
  { idNorma: 's-0087', norma: 'IEC 60669-1:2017', stato: 'In Progress' },
  { idNorma: 's-0082', norma: 'NBN 61 314-1:2017', stato: 'TBD' },
  { idNorma: 's-0189', norma: 'IEC 60884-1:2013', stato: 'Done' },
  { idNorma: 's-0542', norma: 'AUS 2145:2016', stato: 'In Progress' },
];

const listaActivity = ref([]);

// lifecycle hooks
onMounted(async () => {
  listaActivity.value = dati;
});

const store = useAnalisiNormeStore();

function apriDetail(item) {
  let obj = JSON.parse(JSON.stringify(item));
  store.normaAttiva = obj;
  router.push({ name: NOMI_ROUTES.LISTA });
}
</script>

<template>
  <div>
    <div>Status analisi norme</div>
    <div v-for="item in listaActivity" :key="item.idNorma">
      <h3>{{ item.norma }}</h3>
      <p>{{ item.stato }}</p>
      <button @click="apriDetail(item)" class="my_button">Apri detail</button>
    </div>
  </div>
</template>
