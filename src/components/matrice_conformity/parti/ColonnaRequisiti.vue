<script setup>
import CellaRequisito from './CellaRequisito.vue';
import CellaNorma from './CellaNorma.vue';
const props = defineProps({
  norma: String,
  requisiti: Array,
});
</script>
<template>
  <div class="colonna_requisiti">
    <CellaNorma :titolo="props.norma"></CellaNorma>
    <CellaRequisito
      v-for="item in props.requisiti"
      :capitolo="item.sub_chapter"
      :requisito="item.requirement"
    ></CellaRequisito>
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
