<script setup lang="ts">
import { NOMI_ROUTES } from '../index';
import { useAnalisiNormeStore } from '../store';
const store = useAnalisiNormeStore();
</script>
<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div>
    {{ store.editRequisito }}
    <div>Edit View</div>
  </div>
</template>
