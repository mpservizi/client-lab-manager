<script setup>
import { onMounted, ref, watch } from 'vue';
import CellaTitolo from './CellaTitolo.vue';
import CellaProdotto from './CellaProdotto.vue';
const props = defineProps({
  datoProdotto: Object,
});
const dati = ref([]);
const prodotto = ref({});

onMounted(() => {
  dati.value = props.datoProdotto.dati;
  prodotto.value = props.datoProdotto.prodotto;
});

watch(
  () => props.datoProdotto,
  (newValori, oldValori) => {
    listaProdotti.value = newValori;
    dati.value = newValori.dati;
    prodotto.value = newValori.prodotto;
  }
);
</script>
<template>
  <div>
    <div class="colonna_dati">
      <CellaTitolo :prodotto="prodotto"> </CellaTitolo>
      <CellaProdotto v-for="item in dati">{{ item.doc }}</CellaProdotto>
    </div>
  </div>
</template>
<style scoped>
/* Colonna con dati del prodotto, prende tutta la larghezza rimanaente*/
.colonna_dati {
  display: flex;
  flex-direction: column;
}
</style>
