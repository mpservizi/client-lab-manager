<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { IRequisitoNormativo } from '../models/RequisitoNormativo';
import { useAnalisiNormeStore } from '../store';
import FormRequisito from './FormRequisito.vue';
import { MyMsg } from '@src/shared/MyMsg';

const store = useAnalisiNormeStore();
const formRef = ref();
const titolo_form = 'Add new requirement';

async function handleSave(payload: IRequisitoNormativo) {
  try {
    let result = await store.creaNuovoRequisito(payload);
    formRef.value.reset(); //resetta campi del form
    MyMsg.showSucessMsg('Requirement added!');
  } catch (error) {
    console.log(error);
    handleError('Error during requirement delete');
  }
}
function handleCancel() {
  goBack();
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
        ref="formRef"
        @m_submit="handleSave"
        @m_error="handleError"
        @m_cancel="handleCancel"
        :titolo="titolo_form"
      ></FormRequisito>
    </div>
  </div>
</template>
