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
  let payload = JSON.parse(route.params.json);
  // console.log(payload);
  form = new dhx.Form(container, getFormAnalisi());
  form.getItem('btn_save').events.on('click', saveForm);
  form.getItem('btn_edit_images').events.on('click', editImages);

  form.setValue(payload);

  //Snapshot dati impostati
  initStatus = JSON.stringify(form.getValue());
}

function saveForm() {
  let dati = form.getValue();
  let actualStatus = JSON.stringify(dati);
  if (initStatus != actualStatus) {
    storeNorme.updateItem(dati);
  } else {
    console.log('Form non è stato modificato');
  }
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
