<script setup>
/**
 * Wrapper per inizializzare il componente form
 */
import { onMounted, ref } from "vue";

let form = {};
const ref_form = ref(null);
const emit = defineEmits(["ready"]);

onMounted(() => {
  emit("ready", ref_form.value);
});
</script>
<template>
  <div>
    <form ref="ref_form"></form>
  </div>
</template>

<style scoped></style>
