<script setup>
import MatriceConformity from '@src/components/matrice_conformity/MatriceConformity.vue';
import { onMounted } from 'vue';
import { initDb } from './../dati_provider';

onMounted(() => {
  initDb();
});
</script>
<template>
  <div>
    <h1>Flexbox</h1>
    <MatriceConformity></MatriceConformity>
  </div>
</template>
<style></style>
