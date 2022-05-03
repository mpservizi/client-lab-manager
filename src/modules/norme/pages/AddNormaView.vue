<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import { ElMessage } from 'element-plus';
import FormNorma from './FormNorma.vue';
import { MyRouter } from '@src/helpers/MyRouter';
import { getDefaultNorma, INormaForm } from '../models/Norma';

const store = useNormeStore();
const titolo_form = 'Add new standard';

async function salvaNorma(pojo: INormaForm) {
  let result = await store.saveNorma(pojo);
  showMsgSaveNorma(result);
  goBack();
}

function showMsgSaveNorma(norma: INormaForm) {
  ElMessage({
    message: `Standard ${norma.title} saved!`,
    type: 'success',
  });
}

function handleError() {
  ElMessage.error('Someting bad happen...');
  goBack();
}
function goBack() {
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
}
</script>

<template>
  <div>
    <FormNorma
      @m_submit="salvaNorma"
      @m_cancel="goBack"
      @m_error="handleError"
      :config="store.formConfig"
      :payload="getDefaultNorma()"
      :titolo="titolo_form"
    ></FormNorma>
  </div>
</template>

<style scoped></style>
