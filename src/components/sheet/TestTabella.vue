<script setup>
import { ref } from 'vue';
import MySheet from './Tabella.vue';

const data = [
  { id: 1, name: 'Ted Right', address: '' },
  { id: 2, name: 'Frank Honest', address: '' },
  { id: 3, name: 'Joan Well', address: '' },
  { id: 4, name: 'Gail Polite', address: '' },
  { id: 5, name: 'Michael Fair', address: '' },
];

const mSheet = ref();

function getData() {
  console.log(mSheet.value.getData());
}

function setData() {
  mSheet.value.setData(data);
}
</script>

<template>
  <div>
    <button type="button" @click="getData">Get data</button>
    <button type="button" @click="setData">Set data</button>
  </div>

  <MySheet ref="mSheet" />
</template>

<style scoped></style>
