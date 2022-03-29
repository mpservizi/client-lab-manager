<template>
  <div>
    <div>
      <MyTabella :source="tableData"> </MyTabella>
    </div>
    <div>
      <button @click="nomiSelected = filtra()">Get selected nomi</button>
      {{ nomiSelected }}
    </div>
    <div>
      <el-row>
        <el-col :span="6"
          ><GruppoFiltro
            ref="ref_gruppoFiltro_nomi"
            :items="nomi"
            titolo="Nomi"
        /></el-col>
        <el-col :span="6"
          ><GruppoFiltro
            ref="ref_gruppoFiltro_date"
            :items="date"
            titolo="Date"
        /></el-col>
        <el-col :span="6">
          <GruppoFiltro
            ref="ref_gruppoFiltro_indirizzi"
            :items="indirizzi"
            titolo="Indirizzi"
        /></el-col>
        <el-col :span="6"
          ><GruppoFiltro
            ref="ref_gruppoFiltro_tags"
            :items="tags"
            titolo="Tags"
        /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import MyTabella from './MyTabella.vue';
import GruppoFiltro from './GruppoFiltro.vue';
import { estraiDatiCampoUnivoci } from './../../utils/util_dev';

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom 1',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom 2',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom 3',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom 4',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
];

const ref_gruppoFiltro_nomi = ref(null);
const ref_gruppoFiltro_date = ref(null);
const ref_gruppoFiltro_indirizzi = ref(null);
const ref_gruppoFiltro_tags = ref(null);

const nomiSelected = ref([]);

const nomi = estraiDatiCampoUnivoci(tableData, 'name');
const date = estraiDatiCampoUnivoci(tableData, 'date');
const indirizzi = estraiDatiCampoUnivoci(tableData, 'address');
const tags = estraiDatiCampoUnivoci(tableData, 'tag');

function filtra() {
  let cri_nomi = ref_gruppoFiltro_nomi.value.getSelected();
  let cri_date = ref_gruppoFiltro_date.value.getSelected();
  let cri_inidirizzi = ref_gruppoFiltro_indirizzi.value.getSelected();
  let cri_tags = ref_gruppoFiltro_tags.value.getSelected();

  let result = {
    nomi: cri_nomi,
    date: cri_date,
    inidirizzi: cri_inidirizzi,
    tags: cri_tags,
  };

  return result;
}
onMounted(() => {});
</script>
