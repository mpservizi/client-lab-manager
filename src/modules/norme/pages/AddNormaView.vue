<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import { ElMessage } from 'element-plus';
import FormNorma from './FormNorma.vue';
import { IFormConfig } from '../models/FormConfig';
import { MyRouter } from '@src/helpers/MyRouter';
import { getDefaultNorma } from '../models/Norma';

const store = useNormeStore();

let formConfig: IFormConfig = reactive({
  listaComitee: [],
});

onMounted(async () => {
  Object.assign(formConfig, store.formConfig);
});

async function salvaNorma(pojo: any) {
  console.log(pojo);

  // let result = await store.saveNorma(pojo);
  showMsgSaveNorma();
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
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
    <FormNorma
      @m_submit="salvaNorma"
      :config="formConfig"
      :payload="getDefaultNorma()"
    ></FormNorma>
  </div>
</template>

<style scoped></style>
