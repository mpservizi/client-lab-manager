<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import storeNorme from './store/dati';

const router = useRouter();
const route = useRoute();

const titoli = ref([]);
const dati = ref([]);

onMounted(() => {
  let rawLista = storeNorme.loadDati();
  dati.value = ordinaLista(rawLista, 1);
  let item = dati.value[0];
  titoli.value = Object.keys(item);
});

function editItem(item) {
  let obj = JSON.stringify(item);
  router.push({ name: '/norme_EditView', params: { json: obj } });
}

function addNewItem() {
  router.push({ name: '/norme_AddView' });
}
/**
 * Ordina la lista in base al numero del capitolo
 * @param {Array} lista : Lista dei oggetti
 * @param {Number} ordinamento? : Tipo di ordinamento 1 = Crescente 2= Descrescente. Default = 1
 */
function ordinaLista(lista, ordinamento) {
  //Copio i valori per non modificare la lista originale, valutare se serve
  let result = [...lista];
  const CAMPO_SORT = 'Chapter';

  //1 = Crescente 2= Descrescente
  let tipo_ordinamento = ordinamento || 1;

  let v1 = -1;
  let v2 = 1;

  if (tipo_ordinamento == 2) {
    v1 = 1;
    v2 = -1;
  }

  function compare(a, b) {
    //-1 = Crescente 1= Descrescente
    if (a[CAMPO_SORT] < b[CAMPO_SORT]) {
      return v1;
    }
    if (a[CAMPO_SORT] > b[CAMPO_SORT]) {
      return v2;
    }
    return 0;
  }

  result.sort(compare);
  return result;
}
</script>

<template>
  <div>
    <div>Lista dei items</div>
    <div><button @click="addNewItem">Add new</button></div>
    <table>
      <thead>
        <th v-for="titolo in titoli">{{ titolo }}</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="item in dati" :key="item.id">
          <td v-for="campo in titoli">{{ item[campo] }}</td>
          <td class="col_action">
            <button @click="editItem(item)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  text-align: left;
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #000000;
  padding: 5px 4px;
}
tbody td {
  font-size: 13px;
}
thead {
  background: #cfcfcf;
}
thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}
tfoot td {
  font-size: 14px;
}
td {
  width: 200px;
}
.col_action {
  width: 80px;
  text-align: center;
}
table th {
  position: -webkit-sticky; /* this is for all Safari (Desktop & iOS), not for Chrome */
  position: sticky;
  top: 0;
  z-index: 1; /* any positive value, layer order is global */
  /* any bg-color to overlap */
  background: #cfcfcf;
}
</style>
