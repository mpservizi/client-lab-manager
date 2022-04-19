<script setup>
import { ref, watch } from 'vue';
import CellaTitolo from './CellaTitolo.vue';
import CellaProdotto from './CellaProdotto.vue';
const props = defineProps({
  dati: Array,
});
const listaProdotti = ref([]);
watch(
  () => props.datiProdotto,
  (newValori, oldValori) => {
    dati.value = newValori;
  }
);
</script>
<template>
  <div class="colonna_dati">
    <CellaTitolo>Titolo</CellaTitolo>
    <CellaProdotto v-for="item in dati">{{ item.doc }}</CellaProdotto>
  </div>
</template>
<style scoped>
/* Colonna con dati del prodotto, prende tutta la larghezza rimanaente*/
.colonna_dati {
  display: flex;
  flex-direction: column;
}
</style>
