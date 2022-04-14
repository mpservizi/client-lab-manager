<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import RouteLinkBtn from 'components/RouteLinkBtn.vue';

import { NOMI_ROUTES } from '../index';

import { useAnalisiNormeStore } from '../store';
import { RequisitoNormaModel } from '@models/RequisitoNorma';

//ICone bottoni
import { Edit } from '@element-plus/icons-vue';
import { NormaModel } from '@src/models/Norma';

const router = useRouter();
const store = useAnalisiNormeStore();

const titoli = ref([]);
const dati = ref([]);

const campiRequisito = RequisitoNormaModel.getCampi();
const campiNorma = NormaModel.getCampi();
onMounted(async () => {
  let idNorma = store.normaAttiva[campiNorma.id];
  let rawLista = await store.loadRequisitiNorma(idNorma);
  // dati.value = ordinaLista(rawLista, Requirement.chapter, 1);
  dati.value = rawLista;
  creaTitoliTabella();
});

//Indicare qui i titoli dei campi da caricare nella tabella
//Commentare i campi da nascondere
const LABELS_CAMPI = {
  [campiRequisito.chapter]: 'Chapter',
  [campiRequisito.sub_chapter]: 'Sub Chapter',
  [campiRequisito.topic]: 'Topic',
  [campiRequisito.type_requirement]: 'Requirement type',
  [campiRequisito.requirement]: 'Requirement',
  [campiRequisito.note]: 'Note',
  // [campiRequisito.id_image]: 'IdImage',
  // [campiRequisito.id]: 'Id',
};

//Larghezza delle colonne in base al campo
const LARGHEZZA_CAMPI = {
  [campiRequisito.chapter]: 120,
  [campiRequisito.sub_chapter]: 150,
  [campiRequisito.topic]: 200,
  [campiRequisito.type_requirement]: 180,
  [campiRequisito.requirement]: undefined,
  [campiRequisito.note]: 300,
  [campiRequisito.id_image]: 100,
  [campiRequisito.id]: 20,
};

//Crea array dei titoli della tabella con i parametri in base ai campi
function creaTitoliTabella() {
  let elenco = [];
  Object.keys(LABELS_CAMPI).forEach((key) => {
    //oggetto da caricare in array titoli
    let item = {
      campo: key,
      label: LABELS_CAMPI[key],
      width: LARGHEZZA_CAMPI[key],
    };
    elenco.push(item);
  });
  titoli.value = elenco;
}

//Chiamo dal bottone edit in riga della tabella
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
    <h1>{{ store.normaAttiva[campiNorma.title] }} requirements</h1>
    <div class="my_button_box1">
      <RouteLinkBtn label="Home" :routeName="NOMI_ROUTES.HOME" />
      <RouteLinkBtn label="Add new" :routeName="NOMI_ROUTES.NEW" />
    </div>
    <div>
      <el-table
        :data="dati"
        style="width: 100%"
        max-height="800"
        :default-sort="{ prop: campiRequisito.chapter, order: 'descending' }"
      >
        <el-table-column
          v-for="objTitolo in titoli"
          :prop="objTitolo.campo"
          :label="objTitolo.label"
          :width="objTitolo.width"
          sortable
        >
        </el-table-column>
        <el-table-column fixed="right" label="Action" width="120">
          <template #default="scope">
            <el-button
              type="primary"
              @click="editItem(scope.row)"
              :icon="Edit"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped></style>
