<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import { INormaForm } from '@src/modules/norme/models/Norma';

const pronto = ref(false);

const itemsSelezione: { value: any; label: string }[] = reactive([]);
const multiple_risultato = ref([]);
const single_risultato = ref(undefined);

const isMultiple = ref(false);
let datiNorme: INormaForm[] = [];

onMounted(async () => {
  await creaListaSelezione();
  pronto.value = true;
});

function handleSave() {
  let result = undefined;
  if (isMultiple.value) {
    result = resultSelezioneMultiple();
  } else {
    result = resultSelezioneSingola();
  }
  console.log('Save item');
  console.log(result);
}

function resultSelezioneMultiple() {
  let listaNorme: INormaForm[] = [];
  multiple_risultato.value.forEach((idNorma) => {
    let norma = datiNorme.find((item) => item.id == idNorma);
    listaNorme.push({ ...norma });
  });
  return listaNorme;
}

function resultSelezioneSingola() {
  let idNorma = single_risultato.value;
  let result = undefined;
  if (idNorma) {
    result = datiNorme.find((item) => item.id == idNorma);
  }
  return result;
}

function handleCancel() {
  console.log('Cancel pressed');
}

async function creaListaSelezione() {
  let result = false;
  try {
    datiNorme = await ServiceNorme.getListaNorme();

    let tmp = datiNorme.map((item) => {
      return {
        value: item.id,
        label: item.title,
      };
    });

    itemsSelezione.length = 0;
    itemsSelezione.push(...tmp);
    result = true;
  } catch (error) {}

  return result;
}
</script>
<template>
  <div>
    <div>Is multiple {{ isMultiple }}</div>
    <div>Single</div>
    <div>{{ single_risultato }}</div>
    <div>Multiple</div>
    <div>{{ multiple_risultato }}</div>
    <div v-if="pronto">
      <div v-if="isMultiple">
        <div>Choose standards from list</div>
        <el-select-v2
          v-model="multiple_risultato"
          filterable
          :options="itemsSelezione"
          placeholder="Please select"
          style="width: 240px"
          multiple
          clearable
        />
      </div>
      <div v-else>
        <div>Choose one standard from list</div>
        <el-select-v2
          v-model="single_risultato"
          filterable
          :options="itemsSelezione"
          placeholder="Please select"
          style="width: 240px"
          clearable
        />
      </div>
      <div>
        <el-button @click="isMultiple = !isMultiple">Invert</el-button>
        <el-button @click="handleSave">Select</el-button>
        <el-button @click="handleCancel">Cancel</el-button>
      </div>
    </div>
    <div v-else>Loading....</div>
  </div>
</template>

<style scoped></style>
