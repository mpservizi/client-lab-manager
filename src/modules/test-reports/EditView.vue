<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(async () => {});
</script>

<template>
  <div>
    <div>Norme EditView</div>
    <div>{{ route.params.codice }}</div>
    <div>{{ route.params.titolo }}</div>
  </div>
</template>
