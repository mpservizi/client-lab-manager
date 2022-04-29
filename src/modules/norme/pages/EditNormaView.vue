<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import { ElMessage } from 'element-plus';
import { MyRouter } from '@src/helpers/MyRouter';
import FormNorma from './FormNorma.vue';
import { INormaForm, getDefaultNorma } from '../models/Norma';
import { IFormConfig } from '../models/FormConfig';

const store = useNormeStore();
let formConfig: IFormConfig = reactive({
  listaComitee: [],
});

let normaAttiva: INormaForm = reactive(getDefaultNorma());

onMounted(() => {
  let payloadNorma = MyRouter.parseRoutePayload();
  Object.assign(formConfig, store.formConfig);
  Object.assign(normaAttiva, payloadNorma);
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
      :payload="normaAttiva"
    ></FormNorma>
  </div>
</template>

<style scoped></style>
