<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { reactive, ref, Ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { IRequisitoNormativo } from '../models/RequisitoNormativo';
import { useAnalisiNormeStore } from '../store';
import FormRequisito from './FormRequisito.vue';

const store = useAnalisiNormeStore();
const formRef = ref(null);
async function handleSave(payload: IRequisitoNormativo) {
  let result = await store.creaNuovoRequisito(payload);
  formRef.value.reset(); //resetta campi del form
}
function handleCancel() {
  MyRouter.replaceRoute(NOMI_ROUTES.LIST);
}
</script>
<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div>
    {{ store.editRequisito }}
    <div>Edit View</div>
    <div>
      <FormRequisito
        ref="formRef"
        @save="handleSave"
        @cancel="handleCancel"
      ></FormRequisito>
    </div>
  </div>
</template>
