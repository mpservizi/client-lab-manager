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
const model_list = ref({});

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

function updateFiltri() {
  // ranges.value = estraiDatiCampoUnivoci(listaFiltrata.value, props.campi[0]);
  // familys.value = estraiDatiCampoUnivoci(listaFiltrata.value, props.campi[1]);
  // sub_familys.value = estraiDatiCampoUnivoci(
  //   listaFiltrata.value,
  //   props.campi[2]
  // );
}

function save() {
  let result = [range.value, family.value, sub_family.value];
  emit('save', result);
}
watch(
  () => props.dati,
  (newValori, oldValori) => {
    handlePropListaChange(newValori);
  }
);

function handlePropListaChange(newValori: any[]) {
  listaFiltrata.value = [...newValori];
  updateFiltri();
}

const valori_filtri = computed(() => {
  let result = {};
  for (const c in props.campi) {
    let campo = props.campi[c];
    result[campo] = estraiDatiCampoUnivoci(listaFiltrata.value, campo);
  }
  return result;
});

const valori_model = computed(() => {
  let result = {};
  for (const c in props.campi) {
    let campo = props.campi[c];
    result[campo] = estraiDatiCampoUnivoci(listaFiltrata.value, campo);
  }
  return result;
});
function handleChange(campo: string, index: number) {
  let valore = model_list[campo];
  console.log(campo, index, valore);
}
</script>

<template>
  <div>
    <div>
      <table>
        <thead>
          <th>Range</th>
          <th>Family</th>
          <th>Sub Family</th>
        </thead>
        <tbody>
          <tr>
            <td v-for="(item, index) in props.campi">
              <el-select
                v-model="model_list[item]"
                clearable
                placeholder="Select"
                @change="handleChange(item, index)"
              >
                <el-option
                  v-for="(valore, index) in valori_filtri[item]"
                  :key="index"
                  :label="valore"
                  :value="valore"
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
        <p>Props</p>
        <!-- <p>{{ arrValoriFiltro }}</p> -->
        <p>{{ ranges }}</p>
        <p>{{ familys }}</p>
        <p>{{ sub_familys }}</p>
        <!-- <p>{{ props.campi }}</p> -->
      </div>
    </div>
  </div>
</template>
