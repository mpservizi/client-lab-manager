<script setup lang="ts">
import { ref } from 'vue';
import { NOMI_ROUTES } from './../index';
</script>

<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div>
    <h1>Aggiungere nuova norma</h1>
  </div>
</template>

<style scoped></style>
