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
  <div>
    <h1>Standard monitoring status:</h1>
    <div v-for="item in store.listaNorme" :key="item.id">
      <p>
        {{ item.norma.title }} : Last check on {{ item.last_update }} made by
        {{ item.who }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
