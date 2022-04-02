<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import RouteLinkBtn from 'components/RouteLinkBtn.vue';

import { Requirement } from '../models/Requirement';
import { NOMI_ROUTES } from '../index';

import { useAnalisiNormeStore } from '../store';

const router = useRouter();
const store = useAnalisiNormeStore();

const titoli = ref([]);
const dati = ref([]);

onMounted(async () => {
  let rawLista = await store.loadDati();
  dati.value = ordinaLista(rawLista, Requirement.chapter, 1);
  creaTitoliTabella();
});

const LABELS_CAMPI = {
  [Requirement.chapter]: 'Chapter',
  [Requirement.sub_chapter]: 'Sub Chapter',
  [Requirement.topic]: 'Topic',
  [Requirement.type_requirement]: 'Requirement type',
  [Requirement.requirement]: 'Requirement',
  [Requirement.note]: 'Note',
  [Requirement.id_image]: 'IdImage',
  [Requirement.id]: 'Id',
};

function creaTitoliTabella() {
  let item = { ...Requirement };
  delete item.id;
  let elenco = [];
  Object.keys(LABELS_CAMPI).forEach((key) => {
    if (key != Requirement.id) {
      let item = { campo: key, label: LABELS_CAMPI[key] };
      elenco.push(item);
    }
  });
  titoli.value = elenco;
}
function editItem(item) {
  let obj = JSON.stringify(item);
  router.push({ name: 'edit_analisi_norme', params: { json: obj } });
}

/**
 * Ordina la lista in base al numero del capitolo
 * @param {Array} lista : Lista dei oggetti
 * @param {Number} ordinamento? : Tipo di ordinamento 1 = Crescente 2= Descrescente. Default = 1
 */
function ordinaLista(lista, campo, ordinamento) {
  //Copio i valori per non modificare la lista originale, valutare se serve
  let result = [...lista];
  let CAMPO_SORT = campo;

  //1 = Crescente 2= Descrescente
  let tipo_ordinamento = ordinamento || 1;

  let v1 = -1;
  let v2 = 1;

  if (tipo_ordinamento == 2) {
    v1 = 1;
    v2 = -1;
  }

  function compare(a, b) {
    //-1 = Crescente 1= Descrescente
    if (a[CAMPO_SORT] < b[CAMPO_SORT]) {
      return v1;
    }
    if (a[CAMPO_SORT] > b[CAMPO_SORT]) {
      return v2;
    }
    return 0;
  }

  result.sort(compare);
  return result;
}
</script>

<template>
  <div>
    <h1>{{ store.normaAttiva.norma }} requirements</h1>
    <div class="my_button_box">
      <RouteLinkBtn label="Home" :routeName="NOMI_ROUTES.HOME" />
      <RouteLinkBtn label="Add new" :routeName="NOMI_ROUTES.NEW" />
    </div>
    <table>
      <thead>
        <th v-for="objTitolo in titoli">{{ objTitolo.label }}</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="item in dati" :key="item.id">
          <td v-for="keyTitolo in titoli">{{ item[keyTitolo.campo] }}</td>
          <td class="col_action">
            <button @click="editItem(item)" class="my_button">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  text-align: left;
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #000000;
  padding: 5px 4px;
}
tbody td {
  font-size: 13px;
}
thead {
  background: #cfcfcf;
}
thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}
tfoot td {
  font-size: 14px;
}
td {
  width: 200px;
}
.col_action {
  width: 80px;
  text-align: center;
}
table th {
  position: -webkit-sticky; /* this is for all Safari (Desktop & iOS), not for Chrome */
  position: sticky;
  top: 0;
  z-index: 1; /* any positive value, layer order is global */
  /* any bg-color to overlap */
  background: #cfcfcf;
}
</style>
