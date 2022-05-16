<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref, watchEffect } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import { INormaForm } from '@src/modules/norme/models/Norma';
import { MyClipboard } from '@src/composables/my_clipboard';
import { MyMsg } from '@src/shared/MyMsg';
const pronto = ref(false);
const emit = defineEmits(['m_submit', 'm_error', 'm_cancel', 'm_close']);

const props = defineProps({
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
  showSelezione: {
    type: Boolean,
    required: false,
    default: true,
  },
  selected: {
    type: Number,
    required: false,
    default: undefined,
  },
  selected_muliple: {
    type: Array,
    required: false,
    default: undefined,
  },
});

//Dialog control
const dialogVisible = ref(false);

//Lista per la selezione nel componente select. Array {label,value}
const itemsSelezione: { value: any; label: string }[] = reactive([]);
//Model In caso di selezione multipla
const multiple_risultato = ref([]);
//Model in caso di selezione singola
const single_risultato = ref(undefined);

//Titoli delle norme selezionate, mostrate in ui quando dialog è chiuso
const norme_selezionate = ref([]);

//Usati per memorizzare i valori delle liste selezionate
//In caso di pulsante cancel oppure x non viene modificato il valore che era selezioanto all'inizio
//Solo con il tasto save viene modificato il valore di selezione
const backup_multiple_result = ref([]);
const backup_single_result = ref(undefined);

//Lista scaricata dal server
let datiNorme: INormaForm[] = [];

onMounted(async () => {
  await creaListaSelezione();
  checkPropsData();
  pronto.value = true;
});

watchEffect(() => {
  if (props.selected) {
    checkPropsData();
  }
  if (props.selected_muliple) {
    checkPropsData();
  }
});

function checkPropsData() {
  if (props.multiple) {
    if (!props.selected_muliple) return;
    props.selected_muliple.forEach((item: number) => {
      backup_multiple_result.value.push(item);
      console.log(item);
    });
  } else {
    if (!props.selected) return;
    backup_single_result.value = props.selected;
  }
}

//Quando apre il dialog
function onDialogShow() {
  copiaValoriBackupInModel();
}

//Quando dialog viene chiuso senza salvare
function onDialogHide() {
  copiaValoriBackupInModel();
}

//Ripristino i valori di backup nei model delle liste
function copiaValoriBackupInModel() {
  multiple_risultato.value.length = 0;
  multiple_risultato.value.push(...backup_multiple_result.value);
  single_risultato.value = backup_single_result.value;
}

//Titolo form
const titolo = computed(() => {
  return props.multiple
    ? 'Choose standards from list'
    : 'Choose standard from list';
});

//Ricava i dati delle norme selezionate
function ricavaDatiNormeSelezionate() {
  let result: string[] = [];
  if (props.multiple) {
    let selezione_multipla = ricavaSelezioneMultipla();
    if (selezione_multipla) {
      result = selezione_multipla.map((item) => item.title);
    }
  } else {
    let selezione_singola = ricavaSelezioneSingola();
    if (selezione_singola) {
      result.push(selezione_singola.title);
    }
  }
  return result;
}

//Selezione multipla, crea lista delle norme in base ai id selezionati
function ricavaSelezioneMultipla() {
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
}

//Selezione singola, ricava la norma in base al id selezionato
function ricavaSelezioneSingola() {
  let idNorma: number = single_risultato.value;
  let result: INormaForm = undefined;
  if (idNorma) {
    result = datiNorme.find((item) => item.id == idNorma);
  }
  return result;
}

//Tasto Save
function handleSave() {
  let result = undefined;
  if (props.multiple) {
    //Aggiorno il backup
    backup_multiple_result.value.length = 0;
    backup_multiple_result.value.push(...multiple_risultato.value);
    result = ricavaSelezioneMultipla();
  } else {
    backup_single_result.value = single_risultato.value;
    result = ricavaSelezioneSingola();
  }

  let pojo = unref(result);
  //Aggiorno ui norme selezionate
  if (pojo) {
    norme_selezionate.value = ricavaDatiNormeSelezionate();
  } else {
    norme_selezionate.value = [];
  }

  emit('m_submit', pojo);
  dialogVisible.value = false;
}

//Tasto cancel
function handleCancel() {
  //Evoca la chimata al metodo onDialogHide
  dialogVisible.value = false;
  emit('m_cancel');
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

//Doppio click sul tag per copiare il titolo della norma
async function copiaTitolo(item: string) {
  MyClipboard.copy(item).then((esito) => {
    if (esito) {
      MyMsg.showMsg('Copied', 1000);
    }
  });
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
    <!-- Div con dati -->
    <div v-if="pronto">
      <div class="box_bottoni_dialog">
        <!-- Bottone per aprire il dialog -->
        <el-button @click="dialogVisible = true">Choose standard</el-button>
      </div>
      <!-- Blocco teleport per dialog -->
      <Teleport to="#div_dialog">
        <!-- Contenitore del dialog -->
        <div class="dialog_norme">
          <el-dialog
            v-model="dialogVisible"
            :title="titolo"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :show-close="false"
            @close="onDialogHide"
            @open="onDialogShow"
            :modal="false"
            :fullscreen="false"
            width="500px"
            top="5vh"
          >
            <div v-if="props.multiple">
              <el-select-v2
                class="select_norme"
                v-model="multiple_risultato"
                filterable
                :options="itemsSelezione"
                placeholder="Please select"
                :teleported="false"
                multiple
                clearable
              />
            </div>
            <div v-else>
              <el-select-v2
                class="select_norme"
                v-model="single_risultato"
                filterable
                :options="itemsSelezione"
                placeholder="Please select"
                :teleported="false"
                clearable
              />
            </div>
            <template #footer>
              <span class="dialog-footer">
                <div>
                  <el-button @click="handleSave" type="primary"
                    >Confirm</el-button
                  >
                  <el-button @click="handleCancel">Cancel</el-button>
                </div>
              </span>
            </template>
          </el-dialog>
        </div>
      </Teleport>
      <!-- Div per mostrare risultato del dialog in ui -->
      <div v-if="showSelezione">
        <div class="result_selezione">
          <el-tag
            type="info"
            class="tag_norma"
            @dblclick="copiaTitolo(item)"
            v-for="item in norme_selezionate"
            >{{ item }}</el-tag
          >
        </div>
      </div>
      <!--  -->
    </div>
    <!-- Div quando i dati non sono disponibili -->
    <div v-else>Loading....</div>
  </div>
</template>

<style scoped>
/* Div che contiene il bottone per aprire il dialog */
.box_bottoni_dialog {
  padding: 0px;
  margin-bottom: 5px;
}
/* Bottone per aprire dialog */
.box_bottoni_dialog > .el-button {
  margin-left: 0px;
}
/* Controllo select per selezionare le norme */
.select_norme {
  min-width: 300px;
}
/* Tag per mostratre il titolo della norma selezionata */
.tag_norma {
  margin-left: 5px;
}
/* Div che contiene i tag con titoli delle norme selezionate */
.result_selezione {
  padding: 5px;
}
</style>
