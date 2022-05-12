<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import { useNormeMonitorStore } from '../store';
import FormItemMonitor from './FormItemMonitor.vue';
import { IItemMonitor } from '../models/ItemMonitor';
import { MyMsg } from '@src/shared/MyMsg';
const store = useNormeMonitorStore();

const titolo_form = 'Add new item item';

onMounted(async () => {});

function goBack() {
  MyRouter.pushRoute(NOMI_ROUTES.LIST);
}
async function handleDelete() {
  try {
    let result = await store.deleteItem();
    MyMsg.showWarningMsg('Item deleted!');
    goBack();
  } catch (error) {
    console.log(error);
    handleError('Error during item delete');
  }
}
async function handleSave(payload: IItemMonitor) {
  try {
    let result = await store.insertItem(payload);
    MyMsg.showMsg('Item Saved!');
    goBack();
  } catch (error) {
    console.log(error);
    handleError('Error during item save');
  }
}

function handleError(msg: string = 'Someting bad happen...') {
  MyMsg.showErrorMsg(msg);
  goBack();
}
</script>

<template>
  <div>
    <button @click="goBack">Back</button>
    <FormItemMonitor
      :payload="store.itemSelezionato"
      :titolo="titolo_form"
      :cancel_btn="true"
      :delete_btn="true"
      @m_cancel="goBack()"
      @m_delete="handleDelete()"
      @m_submit="handleSave"
    />
  </div>
</template>

<style scoped></style>
