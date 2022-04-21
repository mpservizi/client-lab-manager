<script setup>
import { ref, watch } from 'vue';
import ColonnaDati from './parti/ColonnaDati.vue';
import ColonnaRequisiti from './parti/ColonnaRequisiti.vue';
const props = defineProps({
  norma: String,
  listaRequisiti: Array,
  datiProdotto: Array,
});

const listaRequisiti = ref([]);
const datiProdotti = ref([]);
watch(
  () => props.listaRequisiti,
  (newValori, oldValori) => {
    // console.log('Cambiata lista requisiti');
    listaRequisiti.value = newValori;
  }
);
watch(
  () => props.datiProdotto,
  (newValori, oldValori) => {
    // console.log('Cambiata lista dati prodotto');

    datiProdotti.value = newValori;
  }
);
</script>
<template>
  <div class="box_matrice">
    <ColonnaRequisiti
      :norma="props.norma"
      :requisiti="listaRequisiti"
    ></ColonnaRequisiti>
    <ColonnaDati
      v-for="item in datiProdotti"
      :datoProdotto="item"
    ></ColonnaDati>
  </div>
</template>
<style scoped>
.box_matrice {
  display: flex;
  flex-direction: row;
  min-width: 400px;
  min-height: 200px;
}
</style>
