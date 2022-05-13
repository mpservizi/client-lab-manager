<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import { INormaForm } from '@src/modules/norme/models/Norma';

const pronto = ref(false);
const emit = defineEmits(['m_submit', 'm_error', 'm_cancel', 'm_close']);

const props = defineProps({
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
});

//Dialog control
const dialogVisible = ref(false);

//Lista per la selezione nel componente
const itemsSelezione: { value: any; label: string }[] = reactive([]);
//Model In caso di selezione multipla
const multiple_risultato = ref([]);
//Model in caso di selezione singola
const single_risultato = ref(undefined);

//Lista scaricata dal server
let datiNorme: INormaForm[] = [];

onMounted(async () => {
  await creaListaSelezione();
  pronto.value = true;
  // dialogVisible.value = true;
});

//Titolo form
const titolo = computed(() => {
  return props.multiple
    ? 'Choose standards from list'
    : 'Choose one standard from list';
});

//Selezione singola, ricava la norma in base al id selezionato
const selezione_singola = computed(() => {
  let idNorma: number = single_risultato.value;
  let result: INormaForm = undefined;
  if (idNorma) {
    result = datiNorme.find((item) => item.id == idNorma);
  }
  return result;
});

//Selezione multipla, crea lista delle norme in base ai id selezionati
const selezione_multipla = computed(() => {
  let listaNorme: INormaForm[] = [];
  multiple_risultato.value.forEach((idNorma) => {
    let norma = datiNorme.find((item) => item.id == idNorma);
    listaNorme.push({ ...norma });
  });
  if (listaNorme.length > 0) {
    return listaNorme;
  } else {
    return undefined;
  }
});

//Mostra in ui i titoli delle norme selezionate
const elenco_selezionati = computed(() => {
  let result: string[] = [];
  if (props.multiple) {
    if (selezione_multipla.value) {
      result = selezione_multipla.value.map((item) => item.title);
    }
  } else {
    if (selezione_singola.value) {
      let norma: INormaForm = selezione_singola.value;
      result.push(norma.title);
    }
  }
  return result;
});
//Tasto Save
function handleSave() {
  let result = undefined;
  if (props.multiple) {
    result = selezione_multipla;
  } else {
    result = selezione_singola;
  }

  let pojo = unref(result);
  emit('m_submit', pojo);
  dialogVisible.value = false;
}

//Chiusura dialog
function handleCancel() {
  emit('m_cancel');
  dialogVisible.value = false;
}

//Chiusura dialog
function handleClose() {
  // dialogVisible.value = false;
  emit('m_close');
}

//Ricava la lista delle norme dal db e crea la lista per selezione
async function creaListaSelezione() {
  let result = false;
  try {
    //Lista da db
    datiNorme = await loadDati();

    //Lista per componente
    let tmp = datiNorme.map((item) => {
      return {
        value: item.id,
        label: item.title,
      };
    });

    //Reset valori esistenti e aggiungo nuovi
    itemsSelezione.length = 0;
    itemsSelezione.push(...tmp);
    result = true;
  } catch (error) {
    console.log(error);
    emit('m_error', 'Errore creazione lista di selezione per le norme');
  }

  return result;
}

//Carica i dati dal server
async function loadDati() {
  //Valutare di salare la lista in cache in caso di rallentamenti
  let datiNorme = [];
  try {
    datiNorme = await ServiceNorme.getListaNorme();
  } catch (error) {
    console.log(error);
    emit('m_error', 'Errore caricamento lista norme da db');
  }
  return datiNorme;
}
</script>
<template>
  <div>
    <div>Debug Dialog</div>
    <div>
      <button @click="dialogVisible = true">OpenDialog</button>

      <div class="box_dialog">
        <el-dialog
          v-model="dialogVisible"
          title="titolo dialog"
          @close="handleClose"
        >
          <div class="box_select">
            <div>
              <el-select
                v-model="multiple_risultato"
                filterable
                placeholder="Please select"
                style="width: 100%"
                :teleported="false"
                multiple
                clearable
              >
                <el-option
                  v-for="item in itemsSelezione"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <template #footer>
            <span class="dialog-footer">
              <div>
                <el-button @click="handleSave">Select</el-button>
                <el-button @click="handleCancel">Cancel</el-button>
              </div>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box_dialog {
  /* width: 500px; */
  height: 800px;
  background-color: red;
}
.box_select {
  /* width: 300px;
  height: 200px;
  background-color: bisque; */
}
.el-select-dropdown {
  background-color: aquamarine;
  /* z-index: 3000; */
}
</style>
