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
    std = store.normaAttiva.title;
  }
  return `Edit ${std}`;
});

const loading = ref(false);

async function handleUpdate(pojo: INormaForm) {
  try {
    loading.value = true;
    let result = await store.updateNorma(pojo);
    loading.value = false;

    if (result) {
      MyMsg.showMsg(`Standard updated!`);
    } else {
      MyMsg.showWarningMsg('Error, Standard not updated.');
    }
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
      v-show="!loading"
      @m_submit="handleUpdate"
      @m_cancel="goBack"
      @m_error="handleFormError"
      @m_delete="handleDelete"
      :config="store.formConfig"
      :payload="store.normaAttiva"
      :titolo="titolo_form"
      :delete_btn="true"
    ></FormNorma>
    <div v-show="loading">Please wait...</div>
  </div>
</template>

<style scoped></style>
