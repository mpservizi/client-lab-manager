<script setup>
import CellaTitolo from './CellaTitolo.vue';
import CellaProdotto from './CellaProdotto.vue';
</script>
<template>
  <div class="colonna_dati">
    <CellaTitolo></CellaTitolo>
    <CellaProdotto></CellaProdotto>
    <CellaProdotto></CellaProdotto>
    <CellaProdotto></CellaProdotto>
  </div>
</template>
<style scoped>
/* Colonna con dati del prodotto, prende tutta la larghezza rimanaente*/
.colonna_dati {
  display: flex;
  flex-direction: column;
}
</style>
