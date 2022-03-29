<script setup>
import { computed, onMounted, ref } from 'vue';
import {
  estraiDatiCampoUnivoci,
  maiuscolaIniziale,
} from './../../utils/util_dev';

const props = defineProps({
  source: {
    type: Array,
    required: true,
  },
  labels: {
    type: Array,
    required: false,
  },
});

const tableRef = ref();
let filtrati = ref([]);

onMounted(() => {
  filtrati.value = props.source;
});

const filterHandler = (value, row, column) => {
  const property = column['property'];
  return row[property] === value;
};

const listaLabels = computed(() => {
  //se labels sono indicate da fuori
  if (Array.isArray(props.labels)) {
    return props.labels;
  }
  //Estraggo i campi del primo oggetto nel array
  let keys = Object.keys(props.source[0]);

  //per ogni valore creo l'oggetto da caricare nella colonna
  let result = keys.map((item) => {
    return { campo: item, label: maiuscolaIniziale(item) };
  });

  return result;
});

function creaListaValoriFiltro(campo) {
  const valori = estraiDatiCampoUnivoci(props.source, campo);
  const result = valori.map((item) => {
    return { text: item, value: item };
  });
  return result;
}

function eseguiFiltro(criteri) {
  let result = [];
  if (criteri && criteri.length > 0) {
    //Criteri è un array di oggetti
    //Ogni oggetto ha il nome del campo e come valori un array
    criteri.forEach((objCriterio) => {
      //Prendo la prima chiave, c'è solo una
      let campo = Object.keys(objCriterio)[0];
      //Ricavo array di valori
      let listaCriteri = objCriterio[campo];
      //Estraggo tutti i dati con corrispondono ai valori del campo
      let trovati = filtraCampo(campo, listaCriteri);
      result.push(...trovati);
    });
  } else {
    //Se criteri nn validi, mostro tutti i dati impostati all'inizio
    result = props.source;
  }

  filtrati.value = result;
}

//Filtra i valori in base al campo indicato
function filtraCampo(campo, listaCriteri) {
  let result = [];
  filtrati.value.forEach((item) => {
    //Eseguo OR tra tutti i valori del criterio
    listaCriteri.forEach((valore) => {
      if (item[campo] == valore) {
        result.push(item);
      }
    });
  });

  return result;
}

function resetFiltro() {
  eseguiFiltro();
}
function setCriteri() {
  let criteri = [{ name: ['Tom 3', 'Tom 1'] }];
  eseguiFiltro(criteri);
}
</script>

<template>
  <button @click="setCriteri">filtra</button>
  <button @click="resetFiltro">reset</button>
  <el-table ref="tableRef" row-key="date" :data="filtrati" style="width: 100%">
    <el-table-column
      v-for="item in listaLabels"
      :key="item.campo"
      :prop="item.campo"
      :label="item.label"
    />
  </el-table>
</template>
