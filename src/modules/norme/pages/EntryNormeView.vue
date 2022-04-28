<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { useNormeStore } from '../store';
import { useRouter } from 'vue-router';
import LoadingView from './LoadingView.vue';
const store = useNormeStore();
const router = useRouter();
const ready = ref(false);

onMounted(async () => {
  await store.initModulo();
  let norme = store.listaNorme;
  router.replace({
    name: NOMI_ROUTES.LIST,
    params: {
      json: JSON.stringify(norme),
    },
  });
  ready.value = true;
});
</script>

<template>
  <div>
    <!-- <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div> -->
    <div>Entry norme page</div>
    <p>{{ ready }}</p>
    <router-view v-if="ready"></router-view>
    <div v-else>
      <LoadingView></LoadingView>
    </div>
  </div>
</template>

<style scoped></style>
