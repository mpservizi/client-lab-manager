<script setup>
import { Stile_Matrice } from './matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_titoli,
  // Serve per centrare il testo in mezzo, uguale al altezza della cella
  'line-height': Stile_Matrice.altezza_riga_titoli,
  border: Stile_Matrice.bordo_celle,
};
</script>
<template>
  <div class="titolo_norma" v-bind:style="stile">IEC 60884-1:2013</div>
</template>
<style scoped>
.titolo_norma {
  font-size: x-large;
  text-align: left;
}
</style>
