<script setup>
import { ref } from 'vue';

import Tabella from './components/sheet/TestTabella.vue';

const dati = ref([]);
const params = {
  data: dati.value,
};

const compSheet = ref(null);

function addItem() {
  let id = dati.value.length + 1;
  dati.value.push({ id: id, nome: `Nome ${id}` });
  compSheet.value.print();
}

function removeItem() {
  dati.value.pop();
}
</script>

<template>
  <div>
    <p>My Sheet</p>
    <Tabella />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
