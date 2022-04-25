<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NOMI_ROUTES } from './../index';

const router = useRouter();
const route = useRoute();

let payload: any = route.params.json;
console.log(payload);
</script>

<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div>
    <h1>Edit norma</h1>
  </div>
</template>

<style scoped></style>
