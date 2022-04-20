<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { Stile_Matrice } from '../matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_dati,
  border: Stile_Matrice.bordo_celle,
};

const props = defineProps({
  datoProdotto: Object,
});
const dato = ref({});

onMounted(() => {
  dato.value = props.datoProdotto;
});

watch(
  () => props.datoProdotto,
  (newValori, oldValori) => {
    dato.value = newValori;
  }
);
const esito = computed(() => {
  let result = dato.value.result;
  if (!result || result == '#') {
    result = 'TBD';
  }
  return result;
});

const documento = computed(() => {
  let result = dato.value.doc;
  if (!result || result == '#') {
    result = '';
  }
  return result;
});
</script>
<template>
  <div class="cella_prodotto" v-bind:style="stile">
    <p class="esito">{{ esito }}</p>
    <p class="doc">{{ documento }}</p>
  </div>
</template>
<style scoped>
.cella_prodotto {
  min-width: 80px;
  text-align: center;
}
.esito {
  font-size: medium;
}
.doc {
  font-size: small;
}
</style>
