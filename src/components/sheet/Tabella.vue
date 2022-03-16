<script>
import { initFoglio } from './tabella.js';

let mSheet = null;

function init(container) {
  mSheet = initFoglio(container, {});
}
</script>
<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({});

//refs
const ref_box = ref();

onMounted(() => {
  init(ref_box.value);
});

function getData() {
  return mSheet.getData();
}
function setData(data) {
  mSheet.setData(data);
}
//exports
defineExpose({
  getData,
  setData,
});
</script>

<template>
  <div ref="ref_box"></div>
</template>

<style scoped></style>
