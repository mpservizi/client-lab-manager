<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import FormNorma from './FormNorma.vue';

const store = useNormeStore();
const router = useRouter();

onMounted(async () => {});

async function salvaNorma(pojo: any) {
  console.log(pojo);

  // let result = await store.saveNorma(pojo);
  showMsgSaveNorma();
  router.push({ name: NOMI_ROUTES.LIST, params: {} });
}

function showMsgSaveNorma() {
  ElMessage({
    message: 'Standard added!',
    type: 'success',
  });
}

function showMsgError() {
  ElMessage.error('Standard not saved');
}
</script>

<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div>
    <FormNorma @m_submit="salvaNorma"></FormNorma>
  </div>
</template>

<style scoped></style>
