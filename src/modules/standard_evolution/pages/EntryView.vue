<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import { useAnalisiNormeStore } from '../store';
const store = useAnalisiNormeStore();
const ready = ref(false);

onMounted(async () => {
  await store.initModulo();
  mostraListView();
  ready.value = true;
});

function mostraListView() {
  MyRouter.replaceRoute(NOMI_ROUTES.HOME);
}
</script>

<template>
  <div>
    <router-view v-if="ready"></router-view>
    <div v-else>
      <MyLoading></MyLoading>
    </div>
  </div>
</template>

<style scoped></style>
