<template>
  <MyTabella :source="tableData"> </MyTabella>
</template>

<script setup>
import { computed, ref } from 'vue';

import MyTabella from './MyTabella.vue';

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom 1',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom 2',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom 3',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom 4',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
];
</script>
