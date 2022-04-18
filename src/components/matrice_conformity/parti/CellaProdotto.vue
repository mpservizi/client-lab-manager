<script setup>
import { Stile_Matrice } from '../matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_dati,
  border: Stile_Matrice.bordo_celle,
};
</script>
<template>
  <div class="cella_prodotto" v-bind:style="stile">
    <slot>
      <p class="esito">P</p>
      <p class="doc">rp21lab022</p>
    </slot>
  </div>
</template>
<style scoped>
.cella_prodotto {
  min-width: 80px;
}
.esito {
  font-size: medium;
}
.doc {
  font-size: small;
}
</style>
