<script setup>
import { useRouter, useRoute } from 'vue-router';

import MyForm from 'components/MyForm.vue';
import { buildFormAnalisiNorma } from './form_provider';
import RouteLinkBtn from 'components/RouteLinkBtn.vue';

import { useAnalisiNormeStore } from '../store';

import { NOMI_ROUTES } from '../index';

const store = useAnalisiNormeStore();
const router = useRouter();
// const route = useRoute();

let form = {};
//Salvo qui i dati caricato all'avvio, usato per verificare se form è stato modificato
let initStatus = '';
let formInitailData = {};

function initForm(container) {
  // console.log(payload);
  form = new dhx.Form(container, buildFormAnalisiNorma());
  form.getItem('btn_save').events.on('click', saveForm);
  form.getItem('btn_edit_images').events.on('click', editImages);

  //Snapshot dati impostati
  formInitailData = form.getValue();
  initStatus = JSON.stringify(formInitailData);
}

async function saveForm() {
  let dati = form.getValue();
  let result = await store.addItem(dati);
  if (result) {
    resetForm();
  } else {
    alert('Errore salvataggio dati in db');
  }
}

function editImages() {
  let idRecord = form.getItem('id').getValue();
  console.log('Edit images for record id : ' + idRecord);
}

function resetForm() {
  form.setValue(formInitailData);
}
</script>

<template>
  <div>
    <div class="my_button_box">
      <RouteLinkBtn label="Lista" :routeName="NOMI_ROUTES.LISTA" />
      <button @click="resetForm">Reset form</button>
    </div>
    <MyForm @ready="initForm" />
  </div>
</template>

<style scoped></style>
