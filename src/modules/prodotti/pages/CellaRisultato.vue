<script setup lang="ts">
const props = defineProps({
  product: Object,
  dato: Object,
});
</script>
<template>
  <div v-if="product.id == dato.id_prodotto">
    <p>{{ props.dato.result }}</p>
    <p>{{ props.dato.doc }}</p>
  </div>
  <div v-else>#</div>
</template>
