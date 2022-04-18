<script setup>
import { Stile_Matrice } from './matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_dati,
  border: Stile_Matrice.bordo_celle,
};
</script>
<template>
  <div class="cella_requisito" v-bind:style="stile">
    <div>
      <p class="chapter">Chapter 8.1</p>
      <p class="requisito">Testo di prova per il requisito</p>
    </div>
  </div>
</template>
<style>
.cella_requisito {
  min-width: 80px;
  overflow: auto;
}
.chapter {
  font-size: medium;
  font-weight: 600;
}
.requisito {
  font-size: small;
}
</style>
