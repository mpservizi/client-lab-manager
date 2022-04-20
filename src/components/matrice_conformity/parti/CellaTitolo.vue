<script setup>
import { onMounted, ref, watch } from 'vue';
import { Stile_Matrice } from '../matrice_style';
const stile = {
  // height: Stile_Matrice.altezza_riga_titoli,
  border: Stile_Matrice.bordo_celle,
};

const props = defineProps({
  prodotto: Object,
});

const prodotto = ref({});
onMounted(() => {
  prodotto.value = props.prodotto;
});

watch(
  () => props.prodotto,
  (newValori, oldValori) => {
    prodotto.value = newValori;
  }
);
</script>
<template>
  <div class="box_titolo" :style="stile">
    <div class="riga_range">Gallery</div>
    <div class="riga_img"><img src="src/assets/logo.png" class="image" /></div>
    <div class="riga_terminal">Screwless</div>
  </div>
</template>
<style scoped>
.box_titolo {
  display: grid;
  grid-template-columns: 1fr;
  /* La somma deve essere uguale al altezza della riga titoli. Range-Image-Terminal */
  grid-template-rows: 22px 80px 18px;
  gap: 0px 0px;
}

.riga_range {
  font-weight: bold;
  text-align: center;
}
.riga_img {
  text-align: center;
}
.riga_terminal {
  text-align: center;
  font-size: small;
}
.image {
  max-height: 80px;
  max-width: 80px;
  min-width: 60px;
  min-height: 60px;
  display: inline;
}
</style>
