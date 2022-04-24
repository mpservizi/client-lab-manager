<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({});
const emit = defineEmits(['']);

const ref_box = ref();

onMounted(() => {});

//exports
// defineExpose({
// });
</script>

<template>
  <div ref="ref_box">
    <h1>Modificare nuova norma</h1>
  </div>
</template>

<style scoped></style>
