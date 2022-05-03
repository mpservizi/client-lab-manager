<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { NOMI_ROUTES } from './../index';
import { useNormeStore } from './../store';
import { MyRouter } from '@src/helpers/MyRouter';
import FormNorma from './FormNorma.vue';
import { computed } from '@vue/reactivity';
import { INormaForm } from '../models/Norma';
import { MyMsg } from '@src/shared/MyMsg';

const store = useNormeStore();
const titolo_form = computed(() => {
  let std = 'standard';
  if (store.normaAttiva) {
    std = store.normaAttiva.standard;
  }
  return `Edit ${std}`;
});

async function handleUpdate(pojo: INormaForm) {
  try {
    let result = await store.updateNorma(pojo);
    MyMsg.showMsg(`Standard updated!`);
    goBack();
  } catch (error) {
    console.log(error);
    handleError('Error during standard updating');
  }
}

async function handleDelete() {
  try {
    let result = await store.deleteNorma();
    MyMsg.showWarningMsg('Standard deleted!');
    goBack();
  } catch (error) {
    console.log(error);
    handleError('Error during standard delete');
  }
}

function handleError(msg: string = 'Someting bad happen...') {
  MyMsg.showErrorMsg(msg);
  goBack();
}

/**
 * Errore validazione form
 */
function handleFormError(campi: any) {
  MyMsg.showErrorMsg('Please, check mandatory fields');
  console.log('Errore compilazione form');
}

function goBack() {
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
}
</script>

<template>
  <div>
    <FormNorma
      @m_submit="handleUpdate"
      @m_cancel="goBack"
      @m_error="handleFormError"
      @m_delete="handleDelete"
      :config="store.formConfig"
      :payload="store.normaAttiva"
      :titolo="titolo_form"
      :delete_btn="true"
    ></FormNorma>
  </div>
</template>

<style scoped></style>
