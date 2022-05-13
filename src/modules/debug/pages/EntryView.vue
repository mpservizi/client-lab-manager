<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import { useDebugStore } from '../store';
const store = useDebugStore();
const ready = ref(false);

onMounted(async () => {
  await store.initModulo();
  mostraListView();
  ready.value = true;
});

function mostraListView() {
  MyRouter.replaceRoute(NOMI_ROUTES.DIALOG);
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
