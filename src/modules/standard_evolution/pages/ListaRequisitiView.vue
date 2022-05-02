<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { onMounted, reactive, watchEffect } from 'vue';
import { NOMI_ROUTES } from '../index';
import { INormaStudio } from '../models/NormaStudio';
import { useAnalisiNormeStore } from '../store';
const store = useAnalisiNormeStore();
let payload: INormaStudio = undefined;
let dati = reactive([]);
onMounted(async () => {
  payload = MyRouter.parseRoutePayload();
  console.log(payload);
  dati.length = 0;
  dati.push(...(await store.listaRequsitiNorma(payload.id_norma)));
});
</script>
<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.HOME }">Back</router-link></div>
    <div>{{ dati }}</div>

    <div>Lista dei requsiiti</div>
  </div>
</template>
