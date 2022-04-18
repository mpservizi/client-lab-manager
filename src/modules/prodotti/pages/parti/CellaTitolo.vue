<script setup>
import { Stile_Matrice } from './matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_titoli,
  border: Stile_Matrice.bordo_celle,
};
</script>
<template>
  <div class="cella_titolo" v-bind:style="stile">
    <slot>
      <p class="chapter">Range</p>
      <p class="terminale">Terminal</p>
    </slot>
  </div>
</template>
<style>
.cella_titolo {
  min-width: 80px;
  overflow: auto;
}
.chapter {
  font-size: medium;
}
.terminale {
  font-size: small;
}
</style>
