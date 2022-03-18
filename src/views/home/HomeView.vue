<script setup>
import { ref, onMounted } from 'vue';
import Calendario from '../../components/Calendario.vue';

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(async () => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div>
    <div>Homepage</div>
    <Calendario @cambio="increment" />
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>
