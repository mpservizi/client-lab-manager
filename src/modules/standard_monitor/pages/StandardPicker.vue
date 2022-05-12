<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
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

const itemsSelezione: { value: any; label: string }[] = reactive([]);
const multiple_risultato = ref([]);
const single_risultato = ref(undefined);

//Lista scaricata dal server
let datiNorme: INormaForm[] = [];

onMounted(async () => {
  await creaListaSelezione();
  pronto.value = true;
  dialogVisible.value = true;
});

const titolo = computed(() => {
  return props.multiple
    ? 'Choose standards from list'
    : 'Choose one standard from list';
});

//Selezione multipla, crea lista delle norme in base ai id selezionati
function resultSelezioneMultiple() {
  let listaNorme: INormaForm[] = [];
  multiple_risultato.value.forEach((idNorma) => {
    let norma = datiNorme.find((item) => item.id == idNorma);
    listaNorme.push({ ...norma });
  });
  return listaNorme;
}

//Selezione singola, ricava la norma in base al id selezionato
function resultSelezioneSingola() {
  let idNorma = single_risultato.value;
  let result = undefined;
  if (idNorma) {
    result = datiNorme.find((item) => item.id == idNorma);
  }
  return result;
}

//Tasto Save
function handleSave() {
  let result = undefined;
  if (props.multiple) {
    result = resultSelezioneMultiple();
  } else {
    result = resultSelezioneSingola();
  }
  emit('m_submit', result);
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
    <div v-if="pronto">
      <div>
        <el-button @click="dialogVisible = true">Choose standard</el-button>
      </div>
      <el-dialog
        v-model="dialogVisible"
        :title="titolo"
        :close-on-click-modal="false"
        :show-close="false"
        @close="handleClose"
      >
        <div>
          <el-select-v2
            v-if="props.multiple"
            v-model="multiple_risultato"
            filterable
            :options="itemsSelezione"
            placeholder="Please select"
            style="width: 240px"
            multiple
            clearable
          />
          <el-select-v2
            v-else
            v-model="single_risultato"
            filterable
            :options="itemsSelezione"
            placeholder="Please select"
            style="width: 240px"
            clearable
          />
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
    <div v-else>Loading....</div>
  </div>
</template>

<style scoped></style>
