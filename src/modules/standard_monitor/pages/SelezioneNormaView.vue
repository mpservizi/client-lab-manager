<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import StandardPicker from './StandardPicker.vue';
const pronto = ref(false);

onMounted(async () => {
  pronto.value = true;
});
</script>
<template>
  <div>
    <StandardPicker></StandardPicker>
  </div>
</template>

<style scoped></style>
