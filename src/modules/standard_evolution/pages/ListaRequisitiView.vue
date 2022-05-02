<script setup lang="ts">
import { MyRouter } from '@src/helpers/MyRouter';
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { INormaStudio } from '../models/NormaStudio';
import { useAnalisiNormeStore } from '../store';
import { getCampi, IRequisitoNormativo } from '../models/RequisitoNormativo';

//ICone bottoni
import { Edit } from '@element-plus/icons-vue';
const store = useAnalisiNormeStore();
let dati: IRequisitoNormativo[] = reactive([]);
let campi = getCampi();
const titoli = ref([]);

onMounted(async () => {
  creaTitoliTabella();
  dati.length = 0;
  dati.push(...(await store.listaRequsitiNorma(store.normaAttiva.id_norma)));
});

//Crea array dei titoli della tabella con i parametri in base ai campi
function creaTitoliTabella() {
  //Indicare qui i titoli dei campi da caricare nella tabella
  //Commentare i campi da nascondere
  const LABELS_CAMPI = {
    [campi.chapter]: 'Chapter',
    [campi.sub_chapter]: 'Sub Chapter',
    [campi.topic]: 'Topic',
    [campi.type_requirement]: 'Requirement type',
    [campi.requirement]: 'Requirement',
    [campi.note]: 'Note',
    // [campi.id_image]: 'IdImage',
    // [campi.id]: 'Id',
  };

  //Larghezza delle colonne in base al campo
  const LARGHEZZA_CAMPI = {
    [campi.chapter]: 120,
    [campi.sub_chapter]: 150,
    [campi.topic]: 200,
    [campi.type_requirement]: 180,
    [campi.requirement]: undefined,
    [campi.note]: 300,
    [campi.id_image]: 100,
    [campi.id]: 20,
  };
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
function editItem(item: IRequisitoNormativo) {
  store.editRequisito = item;
  MyRouter.pushRoute(NOMI_ROUTES.EDIT);
}
</script>
<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.HOME }">Back</router-link></div>
    <div>
      <el-table
        :data="dati"
        style="width: 100%"
        max-height="800"
        :default-sort="{ prop: campi.chapter, order: 'descending' }"
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
