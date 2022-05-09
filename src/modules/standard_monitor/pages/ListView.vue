<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeMonitorStore } from '../store';

const store = useNormeMonitorStore();
const ready = ref(false);

onMounted(async () => {});
</script>

<template>
  <div>Lista delle norme con monitoraggio</div>
</template>

<style scoped></style>
