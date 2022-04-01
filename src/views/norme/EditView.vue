<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import MyForm from 'components/MyForm.vue';
import BtnList from './BtnList.vue';
import { buildFormAnalisiNorma } from './form_provider';
import storeNorme from './store/dati';

import { NOMI_ROUTES } from './index';

defineProps({});

const router = useRouter();
const route = useRoute();

let form = {};

//Salvo qui i dati caricato all'avvio, usato per verificare se form è stato modificato
let initStatus = '';

function initForm(container) {
  let payload = JSON.parse(route.params.json);
  // console.log(payload);
  form = new dhx.Form(container, buildFormAnalisiNorma());
  form.getItem('btn_save').events.on('click', saveForm);
  form.getItem('btn_edit_images').events.on('click', editImages);

  form.setValue(payload);

  //Snapshot dati impostati
  initStatus = JSON.stringify(form.getValue());
}

async function saveForm() {
  let dati = form.getValue();
  let actualStatus = JSON.stringify(dati);
  //Se form è stato modificato
  if (initStatus != actualStatus) {
    let result = await storeNorme.updateItem(dati);
    if (!result) {
      alert('Non è stato possibile aggiroanre il database');
    }
  }
  //Torna alla lista
  router.push({ name: NOMI_ROUTES.LISTA });
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
