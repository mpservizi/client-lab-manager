<script setup>
import { ref, onMounted } from 'vue';
import { config } from './index.js';
import ListaReports from './ListaRapporti.vue';

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(async () => {});
</script>

<template>
  <div>
    <div>Mostrare qui la lista dei test report</div>
    <div>Filtrare il ui</div>
    <div>Codificare nuovo</div>
    <div>Modificare esistente</div>
  </div>
  <ListaReports />
</template>
