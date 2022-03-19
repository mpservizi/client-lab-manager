<script setup>
import { ref } from 'vue';
import MySheet from '../../components/sheet/MySheet.vue';

const data = [
  { id: 1, name: 'Ted Right', address: '' },
  { id: 2, name: 'Frank Honest', address: '' },
  { id: 3, name: 'Joan Well', address: '' },
  { id: 4, name: 'Gail Polite', address: '' },
  { id: 5, name: 'Michael Fair', address: '' },
];

const mSheet = ref(null);

function onReady(mySheet) {
  mSheet.value = mySheet;
}

function getData() {
  console.log(mSheet.value.getData());
}

function setData() {
  mSheet.value.setData(data);
  setLabelsWithObj();
}
function setLabelsWithObj() {
  mSheet.value.setLabels(data[0]);
}
function setLabels() {
  mSheet.value.setLabels(['ID', 'Nome', 'Indirizzo']);
}
</script>

<template>
  <div>
    <button type="button" @click="getData">Get data</button>
    <button type="button" @click="setData">Set data</button>
    <button type="button" @click="setLabelsWithObj">Set labels Obj</button>
    <button type="button" @click="setLabels">Set labels</button>
  </div>

  <MySheet ref="mSheet1" @ready="onReady" />
</template>

<style scoped></style>
