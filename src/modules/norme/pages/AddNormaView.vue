<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import FormNorma from './FormNorma.vue';
import { MyRouter } from '@src/helpers/MyRouter';
import { getDefaultNorma, INormaForm } from '../models/Norma';
import { MyMsg } from '@src/shared/MyMsg';

const store = useNormeStore();
const titolo_form = 'Add new standard';
const loading = ref(false);

async function salvaNorma(pojo: INormaForm) {
  try {
    loading.value = true;
    let result = await store.saveNorma(pojo);
    loading.value = false;

    if (result) {
      MyMsg.showSucessMsg(`Standard ${result.title} added!`);
    } else {
      MyMsg.showWarningMsg('Error, Standard not updated.');
    }

    goBack();
  } catch (error) {
    console.log(error);
    MyMsg.showErrorMsg('Error during standard adding');
    goBack();
  }
}

function handleError(campi: any) {
  MyMsg.showErrorMsg('Please, check mandatory fields');
}

function goBack() {
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
}
</script>

<template>
  <div>
    <FormNorma
      v-show="!loading"
      @m_submit="salvaNorma"
      @m_cancel="goBack"
      @m_error="handleError"
      :config="store.formConfig"
      :payload="getDefaultNorma()"
      :titolo="titolo_form"
    ></FormNorma>
    <div v-show="loading">Please wait...</div>
  </div>
</template>

<style scoped></style>
