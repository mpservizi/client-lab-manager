<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { reactive } from 'vue';
import { NOMI_ROUTES } from '../index';
import { IRequisitoNormativo } from '../models/RequisitoNormativo';
import { useAnalisiNormeStore } from '../store';
import FormRequisito from './FormRequisito.vue';

import { MyMsg } from '@src/shared/MyMsg';

const store = useAnalisiNormeStore();
const titolo_form = 'Update requirement';

async function handleSave(payload: IRequisitoNormativo) {
  try {
    let result = await store.updateRequisitoNormativo(payload);
    MyMsg.showMsg('Requirement updated!');
    goBack();
  } catch (error) {
    console.log(error);
    handleError('Error during requirement save');
  }
}

async function handleDelete() {
  try {
    let result = await store.deleteRequisitoNormativo();
    MyMsg.showWarningMsg('Requirement deleted!');
    goBack();
  } catch (error) {
    console.log(error);
    handleError('Error during requirement delete');
  }
}

function handleError(msg: string = 'Someting bad happen...') {
  MyMsg.showErrorMsg(msg);
  goBack();
}

function goBack() {
  MyRouter.replaceRoute(NOMI_ROUTES.LIST);
}
</script>
<template>
  <div>
    <div>
      <FormRequisito
        :payload="store.editRequisito"
        @m_submit="handleSave"
        @m_cancel="goBack()"
        @m_delete="handleDelete"
        :titolo="titolo_form"
        :delete_btn="true"
      ></FormRequisito>
    </div>
  </div>
</template>
