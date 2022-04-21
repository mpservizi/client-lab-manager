<script setup>
import { onMounted, ref, watch } from 'vue';
import CellaTitolo from './CellaTitolo.vue';
import CellaProdotto from './CellaProdotto.vue';
import { Stile_Matrice } from '../matrice_style';

const stile = {
  width: Stile_Matrice.larghezza_colonna_dati,
};

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
    dati.value = newValori.dati;
    prodotto.value = newValori.prodotto;
  }
);
</script>
<template>
  <div>
    <div class="colonna_dati" :style="stile">
      <CellaTitolo :prodotto="prodotto"> </CellaTitolo>
      <CellaProdotto v-for="item in dati" :datoProdotto="item"></CellaProdotto>
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
