<script setup>
import { MySheet } from 'classi/MySheet';
import { onMounted, ref } from 'vue';

// const props = defineProps({});
const emit = defineEmits(['ready']);

//refs
const ref_box = ref();

onMounted(() => {
  const mySheet = new MySheet(ref_box.value, {});
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
