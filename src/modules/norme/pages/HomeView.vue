<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NOMI_ROUTES } from '../index';
import { useAnalisiNormeStore } from '../store';
const router = useRouter();
// const route = useRoute();

const store = useAnalisiNormeStore();

const listaActivity = ref([]);

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
    <div>Status analisi norme</div>
    <div v-for="item in listaActivity" :key="item.idNorma">
      <h3>{{ item.norma }}</h3>
      <p>{{ item.stato }}</p>
      <button @click="apriDetail(item)" class="my_button">Apri detail</button>
    </div>
  </div>
</template>
