<script setup>
import { onMounted, ref, watch } from 'vue';
import { Stile_Matrice } from '../matrice_style';
const stile = {
  height: Stile_Matrice.altezza_riga_titoli,
  border: Stile_Matrice.bordo_celle,
};

const stile_card_body = {
  height: Stile_Matrice.altezza_riga_titoli,
  border: Stile_Matrice.bordo_celle,
  padding: '0px',
  display: 'inline-flex',
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
  <div :style="stile">
    <table class="tab_titolo">
      <tr class="riga_range">
        <td>Gallery</td>
      </tr>
      <tr class="riga_img">
        <td>
          <img src="src/assets/logo.png" class="image" />
        </td>
      </tr>
      <tr class="riga_terminal">
        <td>Screwless</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.tab_titolo {
  width: 100%;
  border-spacing: 0px;
}
.tab_titolo td {
  padding: 0px;
  margin: 0px;
  text-align: center;
}
.riga_range {
  height: 22px;
  font-weight: bold;
}
.riga_img {
  height: 80px;
}
.riga_terminal {
  height: 18px;
  font-size: small;
}

.range {
  font-size: large;
}
.terminale {
  font-size: small;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  max-height: 75px;
  max-width: 100px;
  min-width: 80px;
  min-height: 60px;
  display: inline;
}
</style>
