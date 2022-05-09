<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeMonitorStore } from '../store';
import FormItemMonitor from './FormItemMonitor.vue';
const store = useNormeMonitorStore();
const ready = ref(false);

onMounted(async () => {});

function goBack() {
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
}
</script>

<template>
  <div>
    <button @click="goBack">Back</button>
    <h1>Edit item</h1>
    <FormItemMonitor />
  </div>
</template>

<style scoped></style>
