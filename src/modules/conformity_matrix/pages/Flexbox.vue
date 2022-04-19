<script setup>
import { ref } from 'vue';
import MatriceConformity from '@src/components/matrice_conformity/MatriceConformity.vue';
import { onMounted } from 'vue';
import { initService, loadDatiPerMatrice } from './../service/service';

const listaRequisiti = ref([]);
const listaProdotti = ref([]);
initService();
onMounted(() => {
  let dati = loadDatiPerMatrice();
  listaRequisiti.value = dati.requisiti;
  listaProdotti.value = dati.datiProdotti;
});
</script>
<template>
  <div>
    <h1>Flexbox</h1>
    <MatriceConformity
      :listaRequisiti="listaRequisiti"
      :datiProdotto="listaProdotti"
    ></MatriceConformity>
  </div>
</template>
<style></style>
