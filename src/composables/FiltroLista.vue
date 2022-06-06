<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import {
  estraiDatiCampoUnivoci,
  filtraListaOggetti,
} from '@src/utils/util_dev';

const emit = defineEmits(['m_change']);

//Lista originale con tutti i dati
const lista_dati = reactive([]);
//Campi in base ai quale filtrare
const campi_filtro = reactive(['title', 'status', 'country']);

//Lista con valori filtrati assegnata lla tabella
const lista_filtro = reactive([]);

//Oggetto con valori univoci per ogni campo
const dati_filtro = reactive({});
//Oggetto a cui è associato il valore di filtro selezionato per ogni campo
// Esempio {title:'IEC 60669-4',country:'Italy'}
const result_model = reactive({});
//Indica se è attivo il filtro
const filterOn = ref(false);

// const props = defineProps({
//   multiple: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });

onMounted(async () => {
  let lista = await ServiceNorme.getListaNorme();
  setListaDati(lista);
});

//Inizializza
function setListaDati(lista: any[]) {
  //Reset lista dati
  lista_dati.length = 0;
  lista_dati.push(...lista);
  //reset filtro
  resetListaFiltro();
}

//Imposta i campi in base ai quali filtrare i dati
function setCampiFiltro(campi: string[]) {
  //Reset lista dati
  campi_filtro.length = 0;
  campi_filtro.push(...campi);
  //Creo elenco dei valori unicovi per ogni campo
  Object.assign(dati_filtro, creaValoriFiltroCampi(campi_filtro));
}

//Resetta tutti i filtri
function resetListaFiltro() {
  lista_filtro.length = 0;
  lista_filtro.push(...lista_dati);
  //Svuoto oggetto usato come model per i combobox
  Object.keys(result_model).forEach((campo) => {
    delete result_model[campo];
  });

  filterOn.value = false;
  emit('m_change', lista_dati);
}

// Crea valori univoci per ogni campo indicato
function creaValoriFiltroCampi(campi: string[]) {
  //Creo oggetto con valori univoci per ogni campo
  let result = {};
  campi.forEach((campo) => {
    result[campo] = estraiDatiCampoUnivoci(lista_dati, campo);
  });
  return result;
}

//Per valori undefined mostra il - in lista opzioni dei combobox filtro
function valoreitem(item: any) {
  return item ? item : '-';
}

//Quando cambia un criterio per il filtro
function handleChangeFiltro() {
  //Creo il testo con tutti i criteri impostati. Array in testo separato da niente
  let testo = Object.values(result_model).join('');
  // console.log('testo:', testo);
  //Aggiorno variabile filtro
  filterOn.value = testo.length > 0;
  //Filtro la lista solo se ho selezionato i criteri
  if (filterOn.value) {
    let valoriFiltrati = eseguiFiltro(lista_dati, result_model);
    emit('m_change', valoriFiltrati);
  } else {
    emit('m_change', lista_dati);
  }
}

//Esegue il filtro sulla lista originale e restituisce i valori corrispondenti ai criteri
function eseguiFiltro(listaValori: any[], objFiltro: any) {
  //Elenco dei campi del oggetto filtro
  let criteri = Object.keys(objFiltro);
  let criteriFiltro = {};
  //Ricavo il valore dei campi dove è stato impostato un valore
  criteri.forEach((campo) => {
    if (objFiltro[campo] && objFiltro[campo].length > 0) {
      criteriFiltro[campo] = objFiltro[campo];
    }
  });
  //Filtro la lista orginale in base ai criteri
  let result = filtraListaOggetti(listaValori, criteriFiltro);
  return result;
}

defineExpose({
  setListaDati,
  setCampiFiltro,
});
</script>
<template>
  <div class="box_filtro">
    <table>
      <template v-for="campo in campi_filtro" :key="campo">
        <tr v-if="campo">
          <td>{{ campo }}</td>
          <td class="td_filtro">
            <el-select
              placeholder="Select"
              v-model="result_model[campo]"
              filterable
              clearable
              @change="handleChangeFiltro"
            >
              <el-option
                v-for="(item, index) in dati_filtro[campo]"
                :key="index"
                :value="valoreitem(item)"
              />
            </el-select>
          </td>
        </tr>
      </template>
    </table>
    <div v-if="filterOn">
      <el-button @click="resetListaFiltro">Reset Filter</el-button>
      <p>
        Active filter:<span>{{ result_model }}</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
.td_filtro {
  width: 400px;
}
.el-select {
  width: 100%;
}
</style>
