<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import {
  estraiDatiCampoUnivoci,
  filtraListaOggetti,
} from '@src/utils/util_dev';

const pronto = ref(false);
const emit = defineEmits(['m_submit', 'm_error', 'm_cancel', 'm_close']);

//Lista originale con tutti i dati
const lista_norme = reactive([]);
//Lista con valori filtrati assegnata lla tabella
const lista_filtro_norme = reactive([]);
//Campi del oggetto di cui è composta la lista dei dati
const campi = reactive([]);

//Oggetto con valori univoci per ogni campo
const dati_filtro = reactive({});
//Campi in base ai quale filtrare
const campi_filtro = ['title', 'status', 'country'];
//Oggetto a cui è associato il valore di filtro selezionato per ogni campo
// Esempio {title:'IEC 60669-4',country:'Italy'}
const result_model = reactive({});
// const props = defineProps({
//   multiple: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });

onMounted(async () => {
  let lista = await ServiceNorme.getListaNorme();
  lista_norme.length = 0;
  lista_norme.push(...lista);
  resetListaFiltro();
  creaValoriFiltroCampi();
  pronto.value = true;
  // dialogVisible.value = true;
});

function resetListaFiltro() {
  lista_filtro_norme.length = 0;
  lista_filtro_norme.push(...lista_norme);
  // Object.assign(result_model, {});
  Object.keys(result_model).forEach((campo) => {
    result_model[campo] = undefined;
  });
}

// Crea valori univoci per ogni campo
function creaValoriFiltroCampi() {
  //Estraggo il primo oggetto dalla lista
  let pojo = lista_norme[0];
  campi.length = 0;
  //Creo array con i nomi dei campi
  campi.push(...Object.keys(pojo));
  //Creo oggetto con valori univoci per ogni campo
  let result = {};
  campi_filtro.forEach((campo) => {
    result[campo] = estraiDatiCampoUnivoci(lista_norme, campo);
  });
  //Copio i valori nella variabile globale
  Object.assign(dati_filtro, result);
}

function valoreitem(item: any) {
  return item ? item : '-';
}

function handleSave() {
  console.log('Send result');
  let valoriFiltrati = eseguiFiltro(lista_norme, result_model);
  //Cancello i valori esistenti nella lista filtro
  lista_filtro_norme.length = 0;
  //Copio i valori nella lista usata in tabella
  lista_filtro_norme.push(...valoriFiltrati);
}

function eseguiFiltro(listaValori: any[], objFiltro: any) {
  //Elenco dei campi del oggetto filtro
  let criteri = Object.keys(objFiltro);
  let criteriFiltro = {};
  //Ricavo il valore dei campi dove è stato impostato un valore
  criteri.forEach((campo) => {
    if (objFiltro[campo]) {
      criteriFiltro[campo] = objFiltro[campo];
    }
  });
  //Filtro la lista orginale in base ai criteri
  let result = filtraListaOggetti(listaValori, criteriFiltro);
  return result;
}

function handleChangeFiltro() {
  console.log('Filtro changed');
  handleSave();
}
</script>
<template>
  <div>
    Filtro per la lista

    <div class="box_filtro">
      <table>
        <template v-for="(campo, index) in campi_filtro" :key="index">
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
      <div>
        <el-button @click="handleSave">Filter</el-button>
        <el-button @click="resetListaFiltro">Reset Filter</el-button>
      </div>
      <div>
        {{ result_model }}
      </div>
    </div>

    <div>
      <!-- <div class="legenda">
        <p>
          Legend text color: <span class="norma_obsolate">Obsolate</span>
          <span> - </span>
          <span class="norma_draft">Draft</span>
        </p>
      </div> -->
      <el-table
        :data="lista_filtro_norme"
        style="width: 100%"
        max-height="900"
        :default-sort="{
          prop: 'id',
          order: 'descending',
        }"
      >
        <!-- Titolo norma -->
        <el-table-column prop="title" label="Title" sortable> </el-table-column>
        <!-- Tipo standard -->
        <el-table-column prop="tipo" label="Type" sortable> </el-table-column>
        <!-- Status -->
        <el-table-column prop="status" label="Status" sortable>
        </el-table-column>
        <!-- Product type -->
        <el-table-column prop="product_type" label="Product type" sortable>
        </el-table-column>
        <!-- Country -->
        <el-table-column prop="country" label="Country" sortable>
        </el-table-column>
        <!-- Entry date -->
        <el-table-column label="Entry date" sortable>
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.entry_date }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="exit_date" label="Exit date"></el-table-column> -->

        <!-- Note -->
        <el-table-column prop="note" label="Note"></el-table-column>
        <!-- Action -->
        <el-table-column fixed="right" label="Action" width="120">
          <template #default="scope">
            <el-button type="info" circle></el-button>
            <el-button type="primary" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped>
.box_filtro {
  width: 600px;
}
.td_filtro {
  width: 400px;
}
.el-select {
  width: 100%;
}
</style>
