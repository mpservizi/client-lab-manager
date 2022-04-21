<script setup>
import { ref } from 'vue';
import MatriceConformity from '../componenti/matrice_conformity/MatriceConformity.vue';
import { onMounted } from 'vue';
import { initService, loadDatiPerMatrice } from './../service/service';

const listaRequisiti = ref([]);
const listaProdotti = ref([]);
const norma = ref({});
const idNormaSelezionata = ref(0);
initService();
onMounted(async () => {
  scaricaDati();
});

async function scaricaDati() {
  let idNorma = idNormaSelezionata.value;
  if (idNorma < 1) return;

  let dati = await loadDatiPerMatrice(idNorma);
  listaRequisiti.value = dati.requisiti;
  listaProdotti.value = dati.datiProdotti;
  norma.value = dati.norma;
}
</script>
<template>
  <div>
    <div>
      <el-select
        v-model="idNormaSelezionata"
        clearable
        placeholder="Select"
        @change="scaricaDati"
      >
        <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
      </el-select>
    </div>
    <MatriceConformity
      :listaRequisiti="listaRequisiti"
      :datiProdotto="listaProdotti"
      :norma="norma.title"
    ></MatriceConformity>
  </div>
</template>
<style></style>
