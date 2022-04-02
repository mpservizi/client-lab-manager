<script setup>
import { ref } from 'vue';
import Lista from '../../components/Lista.vue';
const nomi = [
  { id: 1, nome: 'Malkit' },
  { id: 2, nome: 'Jol' },
];
</script>

<template>
  <div>
    <Lista :lista="nomi" v-slot:body="slotProps">
      <div>{{ slotProps.item.nome }}</div>
    </Lista>
  </div>
</template>

<style></style>
