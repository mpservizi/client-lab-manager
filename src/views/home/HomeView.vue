<script setup>
import { ref, onMounted } from 'vue';
import Calendario from '../../components/Calendario.vue';
import DebugView from './../dev/Debug.vue';
// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {});
</script>

<template>
  <div>
    <div>Homepage</div>
    <DebugView />
  </div>
</template>
