<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { reactive } from 'vue';
import { NOMI_ROUTES } from '../index';
import { IRequisitoNormativo } from '../models/RequisitoNormativo';
import { useAnalisiNormeStore } from '../store';
import FormRequisito from './FormRequisito.vue';

const store = useAnalisiNormeStore();
const titolo_form = 'Update requirement';
async function handleSave(payload: IRequisitoNormativo) {
  let result = await store.updateRequisitoNormativo(payload);
  goBack();
}
async function handleDelete() {
  let result = await store.deleteRequisitoNormativo();
  console.log('Requsiito eliminato');
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
