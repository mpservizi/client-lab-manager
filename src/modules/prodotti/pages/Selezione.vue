<script lang="ts" setup>
import { ref, computed, onMounted, watch, PropType } from 'vue';
import {
  estraiDatiCampoUnivoci,
  filtraListaOggetti,
} from '@src/utils/util_dev';
import { ClassificazioneProdotto } from '@src/models/ClassificazioneProdotto';

const emit = defineEmits(['save']);
const props = defineProps({
  dati: Array as PropType<Array<object>>,
  campi: Array as PropType<Array<string>>,
});
//V-models
const range = ref('');
const family = ref('');
const sub_family = ref('');

//Elinco valori filtro
const ranges = ref([]);
const familys = ref([]);
const sub_familys = ref([]);

let listaFiltrata = ref<ClassificazioneProdotto[]>([]);

onMounted(() => {});

function changeRange(valore: string) {
  //Filtro la lista originale aundo cambia il range
  // @ts-ignore
  listaFiltrata.value = filtraListaOggetti(props.dati, {
    [props.campi[0]]: range.value,
  });
  familys.value = estraiDatiCampoUnivoci(listaFiltrata.value, props.campi[1]);
}

function changeFamily(valore: string) {
  // @ts-ignore
  listaFiltrata.value = filtraListaOggetti(props.dati, {
    [props.campi[0]]: range.value,
    [props.campi[1]]: family.value,
  });

  sub_familys.value = estraiDatiCampoUnivoci(
    listaFiltrata.value,
    props.campi[2]
  );
}
function changeSubFamily(valore: string) {}

//lista dei valori selezionati in filtro
let arrValoriFiltro = [range, family, sub_family];

// function handleChange(campo: string, indice: number) {
//   if (indice == 0) {
//     updateLista(props.dati);
//   }
//   let valoreFiltro = arrValoriFiltro[indice].value;
//   listaFiltrata.value = filtraListaOggetti(listaFiltrata.value, {
//     [campo]: valoreFiltro,
//   });
// }

function updateLista(dati: any[]) {
  listaFiltrata.value = [...dati];
}

function updateFiltri() {
  ranges.value = estraiDatiCampoUnivoci(listaFiltrata.value, props.campi[0]);
  familys.value = estraiDatiCampoUnivoci(listaFiltrata.value, props.campi[1]);
  sub_familys.value = estraiDatiCampoUnivoci(
    listaFiltrata.value,
    props.campi[2]
  );
}

function reset(childIndex: number) {
  switch (childIndex) {
    case 0:
      family.value = '';
      sub_family.value = '';
      break;
    case 1:
      sub_family.value = '';
      break;
    case 2:
      break;

    default:
      break;
  }
}

function save() {
  let result = [range.value, family.value, sub_family.value];
  emit('save', result);
}
watch(
  () => props.dati,
  (newValori, oldValori) => {
    updateLista(newValori);
    updateFiltri();
  }
);
</script>

<template>
  <div>
    <table>
      <thead>
        <th>Range</th>
        <th>Family</th>
        <th>Sub Family</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <el-select
              v-model="range"
              clearable
              placeholder="Select"
              @change="changeRange"
            >
              <el-option
                v-for="item in ranges"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </td>
          <td>
            <el-select
              v-model="family"
              clearable
              placeholder="Select"
              @change="changeFamily"
            >
              <el-option
                v-for="item in familys"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </td>
          <td>
            <el-select
              v-model="sub_family"
              clearable
              placeholder="Select"
              @change="changeSubFamily"
            >
              <el-option
                v-for="item in sub_familys"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </td>
          <td><el-button @click="save">Filter</el-button></td>
        </tr>
        <tr>
          <td>{{ range }}</td>
          <td>{{ family }}</td>
          <td>{{ sub_family }}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <el-table>
        <el-table-column>Col 1</el-table-column>
        <el-table-column>Col 2</el-table-column>
        <el-table-column>Col 3</el-table-column>
      </el-table>
    </div>
    <div>
      <p>Props</p>
      <!-- <p>{{ arrValoriFiltro }}</p> -->
      <p>{{ ranges }}</p>
      <p>{{ familys }}</p>
      <p>{{ sub_familys }}</p>
      <!-- <p>{{ props.campi }}</p> -->
    </div>
  </div>
</template>
