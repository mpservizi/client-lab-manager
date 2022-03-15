<script setup>
import { ref, reactive, computed } from "vue";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

const tabella = ref(null);

const props = defineProps({
  config: {
    type: Object,
  },
});

const defaultSettings = {
  data: [],
  colHeaders: true,
  height: "auto",
  licenseKey: "non-commercial-and-evaluation",
};

const settings = computed(() => {
  return {
    ...defaultSettings,
    ...props.config,
  };
});

function print() {
  console.log(tabella.data);
}

defineExpose({
  print,
});
</script>

<template>
  <hot-table ref="tabella" :settings="settings"></hot-table>
</template>

<style src="handsontable/dist/handsontable.full.css"></style>
