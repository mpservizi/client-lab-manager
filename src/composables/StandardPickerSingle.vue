<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import { INormaForm } from '@src/modules/norme/models/Norma';

const pronto = ref(false);
const emit = defineEmits(['m_submit', 'm_error', 'm_cancel', 'm_close']);

//Dialog control
const dialogVisible = ref(false);

//Lista per la selezione nel componente
const itemsSelezione: { value: any; label: string }[] = reactive([]);

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
  return 'Choose standards from list';
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

//Mostra in ui i titoli delle norme selezionate
const elenco_selezionati = computed(() => {
  let result: string[] = [];
  if (selezione_singola.value) {
    let norma: INormaForm = selezione_singola.value;
    result.push(norma.title);
  }
  return result;
});
//Tasto Save
function handleSave() {
  let pojo = unref(selezione_singola);
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
  dialogVisible.value = false;
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
    <div>
      <!-- Bottone per aprire il dialog -->
      <el-button @click="dialogVisible = true">Choose standard</el-button>
    </div>
    <el-dialog
      v-model="dialogVisible"
      :title="titolo"
      width="300px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      @close="handleClose"
      :modal="true"
    >
      <div v-if="pronto">
        <el-select-v2
          v-model="single_risultato"
          filterable
          :options="itemsSelezione"
          placeholder="Please select"
          style="width: 240px"
          clearable
          :teleported="false"
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
</template>

<style scoped></style>
