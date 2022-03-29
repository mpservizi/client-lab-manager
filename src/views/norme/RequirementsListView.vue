<script setup>
import { onMounted, ref } from 'vue';
import loadDati from './store/dati';

const titoli = ref([]);
const dati = ref([]);

onMounted(() => {
  dati.value = loadDati();
  let item = dati.value[0];
  titoli.value = Object.keys(item);
});

function editItem(item) {
  console.log(item);
}
</script>

<template>
  <div>
    <div>Lista dei items</div>
    <table>
      <thead>
        <th v-for="titolo in titoli">{{ titolo }}</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="item in dati">
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
  background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #cfcfcf 100%);
  background: -webkit-linear-gradient(
    top,
    #dbdbdb 0%,
    #d3d3d3 66%,
    #cfcfcf 100%
  );
  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #cfcfcf 100%);
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
</style>
