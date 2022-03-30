<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import MyForm from 'components/MyForm.vue';
import BtnList from './BtnList.vue';
import { getFormAnalisi } from './form_provider';

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

function saveForm() {
  let dati = form.getValue();
  console.log(dati);
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
