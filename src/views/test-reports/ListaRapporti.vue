<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MySheet } from 'src/oop/MySheet';
import MySheetComponent from 'src/components/MySheet.vue';

// reactive state
const lista = ref([]);
const ref_msheet = ref(null);

function loadDati() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    let item = {
      codice: `rp22lab${i}`,
      titolo: `Titolo report ${i}`,
    };
    result.push(item);
  }
  return result;
}
// lifecycle hooks
onMounted(() => {});

function init(mSheet: MySheet) {
  lista.value = loadDati();
  mSheet.setLabels(['report', 'Title']);
  mSheet.setData(lista.value);
}
</script>

<template>
  <div>
    <MySheetComponent ref="ref_msheet" @ready="init" />
  </div>
</template>
