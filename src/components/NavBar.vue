<script setup>
import { ref } from 'vue';
import { MODULI_APP as moduli } from '@apps/mod_loader';
const count = ref(0);
</script>
<template>
  <ul>
    <li v-for="item in moduli" :key="item.path">
      <router-link :to="item.path">{{ item.label }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #dddddd;
  /* height: 100%; */
}
li {
  /* float: left; */
  display: block;
  padding: 10px 0px;
}

a {
  /* display: block; */
  padding: 8px;

  /* background-color: #dddddd; */
}
</style>
