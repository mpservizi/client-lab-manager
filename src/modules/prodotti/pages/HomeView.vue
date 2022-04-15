<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NOMI_ROUTES } from '../index';
import { ClassificazioneProdotto } from '@models/ClassificazioneProdotto';

const router = useRouter();
// const route = useRoute();

// const store = useAnalisiNormeStore();

const listaNorme = ref([]);

//Campi del pojo Norma
const campiClassificazione = ClassificazioneProdotto.getCampi();

// lifecycle hooks
onMounted(async () => {
  //   listaNorme.value = await store.loadNormeAnalizzate();
});

function apriDetail(item) {
  //   let obj = JSON.parse(JSON.stringify(item));
  //   store.normaAttiva = obj;
  //   router.push({ name: NOMI_ROUTES.LISTA });
}
</script>

<template>
  <div>
    <h2>Home prodotti</h2>
  </div>
</template>
