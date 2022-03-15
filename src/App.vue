<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import HelloWorld from "./components/Sheet.vue";

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
  <button @click="addItem">Add</button>
  <button @click="removeItem">Remove</button>
  <HelloWorld ref="compSheet" :config="params" />
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
