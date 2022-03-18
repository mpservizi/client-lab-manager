<script setup>
import { ref, onMounted } from 'vue';

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
    <div>Norme homepage</div>
  </div>
</template>