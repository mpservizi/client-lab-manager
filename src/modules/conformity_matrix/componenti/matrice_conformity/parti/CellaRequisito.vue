<script setup>
import { Stile_Matrice } from '../matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_dati,
  border: Stile_Matrice.bordo_celle,
};
const props = defineProps({
  capitolo: String | Number,
  requisito: String,
});
</script>
<template>
  <div class="cella_requisito" v-bind:style="stile">
    <div>
      <p class="chapter">{{ props.capitolo }}</p>
      <p class="requisito">{{ props.requisito }}</p>
    </div>
  </div>
</template>
<style scoped>
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
