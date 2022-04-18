<script setup>
import ColonnaDati from './parti/ColonnaDati.vue';
import ColonnaRequisiti from './parti/ColonnaRequisiti.vue';
</script>
<template>
  <div class="box_matrice">
    <ColonnaRequisiti></ColonnaRequisiti>
    <ColonnaDati></ColonnaDati>
  </div>
</template>
<style scoped>
.box_matrice {
  display: flex;
  flex-direction: row;
  min-width: 400px;
  min-height: 200px;
}
</style>
