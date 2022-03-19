<script setup lang="ts">
import { MySheet } from '../oop/MySheet';
import { onMounted, ref } from 'vue';

// const props = defineProps({});
const emit = defineEmits(['ready']);

//refs
const ref_box = ref();

onMounted(() => {
  const mySheet: MySheet = new MySheet(ref_box.value, {});
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
