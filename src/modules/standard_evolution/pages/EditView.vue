<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { reactive } from 'vue';
import { NOMI_ROUTES } from '../index';
import { IRequisitoNormativo } from '../models/RequisitoNormativo';
import { useAnalisiNormeStore } from '../store';
import FormRequisito from './FormRequisito.vue';

const store = useAnalisiNormeStore();
function handleSave(payload: IRequisitoNormativo) {
  console.log(payload);
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
        :payload="store.editRequisito"
        @save="handleSave"
        @cancel="handleCancel"
      ></FormRequisito>
    </div>
  </div>
</template>
<style>
.el-select {
  width: 100%;
}
</style>
