<script setup>
import CellaRequisito from './CellaRequisito.vue';
import CellaNorma from './CellaNorma.vue';
</script>
<template>
  <div class="colonna_requisiti">
    <CellaNorma></CellaNorma>
    <CellaRequisito></CellaRequisito>
    <CellaRequisito></CellaRequisito>
    <CellaRequisito></CellaRequisito>
  </div>
</template>
<style scoped>
/* Colonna dei requsiti, larghezza fissa */
.colonna_requisiti {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 200px;
}
</style>
