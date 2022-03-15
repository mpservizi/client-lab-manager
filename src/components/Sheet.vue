<template>
  <hot-table :settings="hotSettings"></hot-table>
</template>

<script>
import { defineComponent } from "vue";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

const dati = [
  ["", "Ford", "Volvo", "Toyota", "Honda"],
  ["2016", 10, 11, 12, 13],
  ["2017", 20, 11, 14, 13],
  ["2018", 30, 15, 12, 13],
];
export default defineComponent({
  data() {
    return {
      hotSettings: {
        data: dati,
        colHeaders: true,
        height: "auto",
        licenseKey: "non-commercial-and-evaluation",
      },
    };
  },
  components: {
    HotTable,
  },
});
</script>

<style src="handsontable/dist/handsontable.full.css"></style>
