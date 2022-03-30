<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

function goBack() {
  router.push({ name: '/norme_RequirementsListView' });
}
</script>

<template>
  <button @click="goBack">List View</button>
</template>

<style scoped></style>
