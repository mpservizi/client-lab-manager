<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import MyForm from 'components/MyForm.vue';
import BtnList from './BtnList.vue';
import { getFormAnalisi } from './form_provider';

import storeNorme from './store/dati';

defineProps({});

const router = useRouter();
const route = useRoute();

let form = {};
//Salvo qui i dati caricato all'avvio, usato per verificare se form è stato modificato
let initStatus = '';

function initForm(container) {
  // console.log(payload);
  form = new dhx.Form(container, getFormAnalisi());
  form.getItem('btn_save').events.on('click', saveForm);
  form.getItem('btn_edit_images').events.on('click', editImages);

  //Snapshot dati impostati
  initStatus = JSON.stringify(form.getValue());
}

async function saveForm() {
  let dati = form.getValue();
  let result = await storeNorme.addItem(dati);
  console.log('Item saved');
  console.log(result);
}

function editImages() {
  let idRecord = form.getItem('id').getValue();
  console.log('Edit images for record id : ' + idRecord);
}
</script>

<template>
  <div>
    <BtnList />
    <MyForm @ready="initForm" />
  </div>
</template>

<style scoped></style>
