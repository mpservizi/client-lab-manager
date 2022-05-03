<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import { ElMessage } from 'element-plus';
import { MyRouter } from '@src/helpers/MyRouter';
import FormNorma from './FormNorma.vue';
import { computed } from '@vue/reactivity';
import { INormaForm } from '../models/Norma';

const store = useNormeStore();
const titolo_form = computed(() => {
  let std = 'standard';
  if (store.normaAttiva) {
    std = store.normaAttiva.standard;
  }
  return `Edit ${std}`;
});

async function salvaNorma(pojo: INormaForm) {
  let result = await store.updateNorma(pojo);
  showMsgSaveNorma(result);
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
}

function showMsgSaveNorma(norma: INormaForm) {
  ElMessage({
    message: `Standard ${norma.title} updated!`,
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
    <FormNorma
      @m_submit="salvaNorma"
      :config="store.formConfig"
      :payload="store.normaAttiva"
      :titolo="titolo_form"
    ></FormNorma>
  </div>
</template>

<style scoped></style>
