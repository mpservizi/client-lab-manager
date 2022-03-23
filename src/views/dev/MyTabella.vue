<script setup>
import { computed, onMounted, ref } from 'vue';

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
const criteri = ref(null);
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

/**
 * Transforma la prima lettera in maiuscolo della stringa indicata
 * @param {String} testo
 */
function maiuscolaIniziale(testo) {
  const result = testo.charAt(0).toUpperCase() + testo.slice(1).toLowerCase();
  return result;
}

/**
 * Estrae il campo dal array di oggetti
 * @param {Array} dati :Array di oggetti
 * @param {String} campo : Nome del campo da estrarre per ogni oggetto
 */
function estraiCampo(dati, campo) {
  return dati.map((item) => item[campo]);
}

/**
 * Rimouve i dupplicati da un array di Strings
 * @param {Array} dati
 */
function rimuoviDuplicati(dati) {
  const unique = [...new Set(dati)];
  return unique;
}

/**
 * Estrae i valori univoci del campo indicato, dal array di oggetti
 * @param {Array} dati :Array di oggetti
 * @param {String} campo : Nome del campo da estrarre per ogni oggetto
 */
function estraiDatiCampoUnivoci(dati, campo) {
  let valori = estraiCampo(dati, campo);
  return rimuoviDuplicati(valori);
}

// TODO Creare la funzione per filtrare la colonna di dati
function eseguiFiltro() {
  let result = [];
  if (criteri.value.length > 0) {
    result = filtrati.value.forEach((item) => {
      criteri.value.forEach((criterio) => {
        let campi = Object.keys(criterio);
        campi.forEach((campo) => {
          console.log(criterio[campo]);
          if (item[campo] == criterio[campo]) {
            result.push(item);
          }
        });
      });
    });
  } else {
    result = props.source;
  }

  console.log(result);
  filtrati.value = result;
}

function resetFiltro() {
  criteri.value = [];
  eseguiFiltro();
}
function setCriteri() {
  criteri.value = [{ name: 'Tom 3' }, { name: 'Tom 1' }];
  eseguiFiltro();
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
