<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { ClassificazioneProdotto } from '@models/ClassificazioneProdotto';
import { useClassificazioneStore } from './store';

import SelezioneProdotti from './Selezione.vue';
import { filtraListaOggetti } from '@src/utils/util_dev';
const router = useRouter();
// const route = useRoute();

const store = useClassificazioneStore();

const lista = ref<ClassificazioneProdotto[]>([]);
const lista_filtrata = ref<ClassificazioneProdotto[]>([]);
const titoli = ref<CampoTabella[]>([]);

interface CampoTabella {
  campo: string;
  label: string;
  width: number | undefined;
}

//Campi del pojo Norma
const campiClassificazione = ClassificazioneProdotto.getCampi();

// lifecycle hooks
onMounted(async () => {
  lista.value = await store.listaProdotti();
  lista_filtrata.value = [...lista.value];
  creaTitoliTabella();
});

//Indicare qui i titoli dei campi da caricare nella tabella
//Commentare i campi da nascondere
const LABELS_CAMPI = {
  // [campiClassificazione.range]: 'Range',
  // [campiClassificazione.family]: 'Family',
  // [campiClassificazione.sub_family]: 'Sub family',
  ...campiClassificazione,
};

//Larghezza delle colonne in base al campo
const LARGHEZZA_CAMPI = {
  [campiClassificazione.id]: 80,
  // [campiClassificazione.range]: 100,
  // [campiClassificazione.family]: 150,
  // [campiClassificazione.sub_family]: 150,
};

//Crea array dei titoli della tabella con i parametri in base ai campi
function creaTitoliTabella() {
  let elenco: CampoTabella[] = [];
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

function handleSelezione(selezione: string[]) {
  const filter = {
    [campiClassificazione.range]: selezione[0],
    [campiClassificazione.family]: selezione[1],
    [campiClassificazione.sub_family]: selezione[2],
  };
  lista_filtrata.value = filtraListaOggetti(lista.value, filter);
}
</script>

<template>
  <div>
    <div>
      <SelezioneProdotti
        @save="handleSelezione"
        :campi="[
          campiClassificazione.range,
          campiClassificazione.family,
          campiClassificazione.sub_family,
        ]"
        :dati="lista"
      />
    </div>
    <div>
      <h2>Home prodotti</h2>
      <el-table
        :data="lista_filtrata"
        style="width: 100%"
        max-height="800"
        :default-sort="{
          prop: campiClassificazione.range,
          order: 'descending',
        }"
      >
        <el-table-column
          v-for="objTitolo in titoli"
          :prop="objTitolo.campo"
          :label="objTitolo.label"
          :width="objTitolo.width"
          sortable
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
