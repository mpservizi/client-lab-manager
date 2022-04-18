<script setup>
import { Stile_Matrice } from './matrice_style';
import CellaRequisito from './CellaRequisito.vue';
import CellaTitolo from './CellaTitolo.vue';
import CellaProdotto from './CellaProdotto.vue';
import CellaNorma from './CellaNorma.vue';
const stile = {
  height: Stile_Matrice.altezza_riga_titoli,
  border: Stile_Matrice.bordo_celle,
};
</script>
<template>
  <div class="conatiner">
    <div class="colonna_requisiti">
      <CellaNorma></CellaNorma>
      <CellaRequisito></CellaRequisito>
      <CellaRequisito></CellaRequisito>
      <CellaRequisito></CellaRequisito>
    </div>
    <div class="colonna_dati">
      <CellaTitolo></CellaTitolo>
      <CellaProdotto></CellaProdotto>
      <CellaProdotto></CellaProdotto>
      <CellaProdotto></CellaProdotto>
    </div>
  </div>
</template>
<style>
.conatiner {
  display: flex;
  flex-direction: row;
  min-width: 400px;
  min-height: 200px;
}
/* Colonna dei requsiti, larghezza fissa */
.colonna_requisiti {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 200px;
}
/* Colonna con dati del prodotto, prende tutta la larghezza rimanaente*/
.colonna_dati {
  display: flex;
  flex-direction: column;
}
</style>
