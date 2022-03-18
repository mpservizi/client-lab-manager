<script setup>
import { initFoglio } from './tabella.js';
import { onMounted, ref } from 'vue';

// const props = defineProps({});
const emit = defineEmits(['ready']);

//refs
const ref_box = ref();

onMounted(() => {
  const mySheet = initFoglio(ref_box.value, {});
  emit('ready', mySheet);
});

//exports
// defineExpose({
// });
</script>

<template>
  <div ref="ref_box"></div>
</template>

<style scoped></style>
