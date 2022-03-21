<script setup>
import { ref } from 'vue';

const props = defineProps({
  source: {
    type: Object,
    required: true,
  },
});

const tableRef = ref();

const filterHandler = (value, row, column) => {
  const property = column['property'];
  return row[property] === value;
};
</script>

<template>
  <el-table
    ref="tableRef"
    row-key="date"
    :data="props.source"
    style="width: 100%"
  >
    <el-table-column prop="date" label="Data" />
    <el-table-column prop="name" label="Nome" />
    <el-table-column prop="address" label="Indirizzo" />
    <el-table-column prop="tag" label="Tag" />
  </el-table>
</template>
