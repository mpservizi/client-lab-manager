<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// reactive state
const router = useRouter();
const lista = ref([]);
const labels = ref(['Codice', 'Titolo']);
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
onMounted(() => {
  lista.value = loadDati();
});

function editItem(item) {
  console.log('Edit');
  console.log(item);
  router.push('/reports/edit');
}
function detailItem(item) {
  console.log('Delete');
  console.log(item);
}
</script>

<template>
  <div>
    <table>
      <thead>
        <th v-for="(item, index) in labels" :key="index">{{ item }}</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lista" :key="item.codice">
          <td>{{ item.codice }}</td>
          <td>{{ item.titolo }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="detailItem(item)">Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
