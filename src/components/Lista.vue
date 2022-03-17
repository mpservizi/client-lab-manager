<script setup>
import { computed, ref } from 'vue';

const dati = ref([]);

const props = defineProps({
  lista: Array,
});

dati.value = props.lista || [];

function addItem() {
  let id = dati.value.length + 1;
  dati.value.push({ id: id, nome: `Nome ${id}` });
}

function removeItem() {
  dati.value.pop();
}

const hasItems = computed(() => {
  return dati.value.length > 0;
});
</script>

<template>
  <div>
    <button @click="addItem">+</button>
    <button @click="removeItem">-</button>
    <ul>
      <li v-if="hasItems" v-for="dato in dati" :key="dato.id">
        <slot name="body" :item="dato">Default item {{ dato.id }}</slot>
      </li>
      <div v-else>No items</div>
    </ul>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
  min-height: 30px;
  min-width: 30px;
}
ul {
  list-style: none;
  text-align: left;
}
</style>
