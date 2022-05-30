<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import { estraiDatiCampoUnivoci } from '@src/utils/util_dev';
const pronto = ref(false);
const emit = defineEmits(['m_submit', 'm_error', 'm_cancel', 'm_close']);

const lista_norme = reactive([]);
const campi = reactive([]);
const item_1 = ref(undefined);
const dati_filtro = reactive({});
const campi_filtro = ['title', 'status', 'country'];
const result_model = reactive({});
// const props = defineProps({
//   multiple: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });

//Dialog control
const dialogVisible = ref(false);

onMounted(async () => {
  let lista = await ServiceNorme.getListaNorme();
  lista_norme.length = 0;
  lista_norme.push(...lista);
  valoriCampi();
  pronto.value = true;
  // dialogVisible.value = true;
});

function valoriCampi() {
  let pojo = lista_norme[0];
  campi.length = 0;
  campi.push(...Object.keys(pojo));
  let result = {};
  campi_filtro.forEach((campo) => {
    result[campo] = estraiDatiCampoUnivoci(lista_norme, campo);
  });
  console.log(result);
  Object.assign(dati_filtro, result);
}

function valoreitem(item: any) {
  return item ? item : '-';
}
</script>
<template>
  <div>
    Filtro per la lista

    <div class="box_filtro">
      <table>
        <template v-for="(campo, index) in campi_filtro" :key="index">
          <tr v-if="campo">
            <td>{{ campo }}</td>
            <td class="td_filtro">
              <el-select placeholder="Select" v-model="result_model[campo]">
                <el-option
                  v-for="(item, index) in dati_filtro[campo]"
                  :key="index"
                  :value="valoreitem(item)"
                />
              </el-select>
            </td>
          </tr>
        </template>
      </table>
      <div>
        <el-button>Filter</el-button>
      </div>
      <div>
        {{ result_model }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.box_filtro {
  width: 600px;
}
.td_filtro {
  width: 400px;
}
.el-select {
  width: 100%;
}
</style>
