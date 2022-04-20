<script setup>
import { ref } from 'vue';
import MatriceConformity from '../componenti/matrice_conformity/MatriceConformity.vue';
import { onMounted } from 'vue';
import { initService, loadDatiPerMatrice } from './../service/service';

const listaRequisiti = ref([]);
const listaProdotti = ref([]);
const norma = ref({});
initService();
onMounted(() => {
  let dati = loadDatiPerMatrice();
  listaRequisiti.value = dati.requisiti;
  listaProdotti.value = dati.datiProdotti;
  norma.value = dati.norma;
});
</script>
<template>
  <div>
    <h1>Flexbox</h1>
    <MatriceConformity
      :listaRequisiti="listaRequisiti"
      :datiProdotto="listaProdotti"
      :norma="norma.title"
    ></MatriceConformity>
  </div>
</template>
<style></style>
