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
const listaProdotti = ref([]);
watch(
  () => props.listaRequisiti,
  (newValori, oldValori) => {
    listaRequisiti.value = newValori;
  }
);
watch(
  () => props.datiProdotto,
  (newValori, oldValori) => {
    listaProdotti.value = newValori;
  }
);
</script>
<template>
  <div class="box_matrice">
    <ColonnaRequisiti
      :norma="props.norma"
      :requisiti="listaRequisiti"
    ></ColonnaRequisiti>
    <ColonnaDati v-for="item in listaProdotti" :dati="item.dati"></ColonnaDati>
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
